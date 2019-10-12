from collections import Counter
import regex

__data_dir = "raw"
__file_name = "V分類.txt"
DATA_PATH = __data_dir + '/' + __file_name


class Data:
    __ptn_name = regex.compile(r"🌟\s?(.+)\n")
    __ptn_looks = regex.compile(r"見た目：[　|\s]?(.*)\n")
    __ptn_contents = regex.compile(r"活動内容：[　|\s]?(.*)\n")
    __ptn_settings = regex.compile(r"設定など：[　|\s]?(.*)\n")
    __ptn_other = regex.compile(r"その他：[　|\s]?(.*)")

    def __init__(self, raw: str):
        self.name: str = None
        self.looks: str = None
        self.contents: str = None
        self.settings: str = None
        self.other: str = None

        self.__parse(raw)


    def __parse(self, raw: str):
        for key, ptn in self.key_ptn().items():
            g = ptn.search(raw)
            if g and len(g) >= 2:
                value = g[1] if key == "name" else g[1].split('、')
                setattr(self, key, value)
            else:
                assert g, "%s not match" % key
                assert len(g) >= 2, "%s not get groups" % key


    def key_ptn(self):
        return {
            "name": self.__ptn_name,
            "looks": self.__ptn_looks,
            "contents": self.__ptn_contents,
            "settings": self.__ptn_settings,
            "other": self.__ptn_other,
        }



def get_raw(file_path: str = DATA_PATH):
    with open(file_path, encoding='utf-16') as f:
        raw = f.read()
    return raw


def parse_data(raw_data: str):
    for x in raw_data.split("\n\n"):
        print("-"*20)
        data = Data(x)
        print("name:", data.name)
        print("looks:", data.looks)
        print("contents:", data.contents)
        print("settings:", data.settings)
        print("other:", data.other)


if __name__ == "__main__":
    parse_data(get_raw())
