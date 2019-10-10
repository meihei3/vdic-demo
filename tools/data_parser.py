from collections import Counter
import regex

__data_dir = "raw"
__file_name = "V分類.txt"
DATA_PATH = __data_dir + '/' + __file_name


class RegexPattern:
    name = "🌟\s(.+)\n"
    looks = "見た目：[　|\s]?(.+)\n"
    fact = "活動内容：[　|\s]?(.+)\n"
    settings = "設定など：[　|\s]?(.+)\n"
    other = "その他：[　|\s]?(.*)"


def get_raw(file_path: str = DATA_PATH):
    with open(file_path, encoding='utf-16') as f:
        raw = f.read()
    return raw


def parse_data(raw_data: str):
    for x in raw_data.split("\n\n"):
        print("-"*30)
        print(x)


if __name__ == "__main__":
    parse_data(get_raw())
