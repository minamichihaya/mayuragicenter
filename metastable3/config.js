METASTABLECFG = {}
// option 要素の value を指定
// <option value="VALUE">
//   or
// <option>VALUE</option>
//
// 例1: <option>ブラウザ指定</value> なら
// METASTABLECFG.defaultFont = "ブラウザ指定";
// 例2: <option value="../fonts/meiryo.css">メイリオ</option> なら
// METASTABLECFG.defaultFont = "../fonts/meiryo.css";

// どれかひとつをアンコメントすること
METASTABLECFG.defaultFont = "ブラウザ指定";
// METASTABLECFG.defaultFont = "../fonts/meiryo.css";
// METASTABLECFG.defaultFont = "../fonts/notosans.css";
// METASTABLECFG.defaultFont = "../fonts/yu_mincho.css";
// METASTABLECFG.defaultFont = "../fonts/hanazono_mincho.css";
// METASTABLECFG.defaultFont = "../fonts/sans-serif.css";
// METASTABLECFG.defaultFont = "../fonts/serif.css";


METASTABLECFG.chapters = [
                    {
                      sectPrefix: "",
                      title: "プロローグ",
                      id: "0",
                      sections:
                        [
                          {
                            title: "*",
                            id: "0",
                          },
                        ],
                    },
                    {
                      sectPrefix: "§1",
                      title: "　A Tear",
                      id: "1-01",
                      sections:
                        [
                          {
                            title: "1",
                            id: "1-01",
                          },
                          {
                            title: "2",
                            id: "1-02",
                          },
                          {
                            title: "3",
                            id: "1-03",
                          },
                          {
                            title: "4",
                            id: "1-04",
                          },
                        ],
                    },
                    {
                      sectPrefix: "§2",
                      title: "　",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "§3",
                      title: "　",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "§4",
                      title: "　",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "§5",
                      title: "　",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "§6",
                      title: "　",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "エピローグ",
                      id: "7",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "あとがき",
                      id: "postscript",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "Acknowledgements",
                      id: "acknowledgements",
                      sections:
                        [
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "References",
                      id: "references",
                      sections:
                        [
                        ],
                    }
                  ];
