HPFTCFG = {}
// option 要素の value を指定
// <option value="VALUE">
//   or
// <option>VALUE</option>
//
// 例1: <option>ブラウザ指定</value> なら
// HPFTCFG.defaultFont = "ブラウザ指定";
// 例2: <option value="../fonts/meiryo.css">メイリオ</option> なら
// HPFTCFG.defaultFont = "../fonts/meiryo.css";

// どれかひとつをアンコメントすること
HPFTCFG.defaultFont = "ブラウザ指定";
// HPFTCFG.defaultFont = "../fonts/meiryo.css";
// HPFTCFG.defaultFont = "../fonts/notosans.css";
// HPFTCFG.defaultFont = "../fonts/yu_mincho.css";
// HPFTCFG.defaultFont = "../fonts/hanazono_mincho.css";
// HPFTCFG.defaultFont = "../fonts/sans-serif.css";
// HPFTCFG.defaultFont = "../fonts/serif.css";


HPFTCFG.chapters = [
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
                      title: "　虹を閉じ込めた瞳",
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
                          {
                            title: "5",
                            id: "1-05",
                          },
                          {
                            title: "6",
                            id: "1-06",
                          },
                          {
                            title: "7",
                            id: "1-07",
                          },
                        ],
                    },
                    {
                      sectPrefix: "§2",
                      title: "　海へいこう",
                      sections:
                        [
                          {
                            title: "1",
                            id: "2-01",
                          },
                          {
                            title: "2",
                            id: "2-02",
                          },
                          {
                            title: "3",
                            id: "2-03",
                          },
                          {
                            title: "4",
                            id: "2-04",
                          },
                          {
                            title: "5",
                            id: "2-05",
                          },
                          {
                            title: "6",
                            id: "2-06",
                          },
                        ],
                    },
                    {
                      sectPrefix: "§3",
                      title: "　その柔肌は誰がために",
                      sections:
                        [
                          {
                            title: "1",
                            id: "3-01",
                          },
                          {
                            title: "2",
                            id: "3-02",
                          },
                          {
                            title: "3",
                            id: "3-03",
                          },
                          {
                            title: "4",
                            id: "3-04",
                          },
                          {
                            title: "5",
                            id: "3-05",
                          },
                          {
                            title: "6",
                            id: "3-06",
                          },
                          {
                            title: "7",
                            id: "3-07",
                          },
                          {
                            title: "8",
                            id: "3-08",
                          },
                        ],
                    },
                    {
                      sectPrefix: "§4",
                      title: "　因果の玉突き",
                      sections:
                        [
                          {
                            title: "1",
                            id: "4-01",
                          },
                          {
                            title: "2",
                            id: "4-02",
                          },
                          {
                            title: "3",
                            id: "4-03",
                          },
                          {
                            title: "4",
                            id: "4-04",
                          },
                          {
                            title: "5",
                            id: "4-05",
                          },
                          {
                            title: "6",
                            id: "4-06",
                          },
                        ],
                    },
                    {
                      sectPrefix: "§5",
                      title: "　機械の少女",
                      sections:
                        [
                          {
                            title: "1",
                            id: "5-01",
                          },
                          {
                            title: "2",
                            id: "5-02",
                          },
                          {
                            title: "3",
                            id: "5-03",
                          },
                          {
                            title: "4",
                            id: "5-04",
                          },
                          {
                            title: "5",
                            id: "5-05",
                          },
                          {
                            title: "6",
                            id: "5-06",
                          },
                          {
                            title: "7",
                            id: "5-07",
                          },
                          {
                            title: "8",
                            id: "5-08",
                          },
                        ],
                    },
                    {
                      sectPrefix: "§6",
                      title: "　もうひとつの部屋",
                      sections:
                        [
                          {
                            title: "1",
                            id: "6-01",
                          },
                          {
                            title: "2",
                            id: "6-02",
                          },
                          {
                            title: "3",
                            id: "6-03",
                          },
                          {
                            title: "4",
                            id: "6-04",
                          },
                          {
                            title: "5",
                            id: "6-05",
                          },
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "エピローグ",
                      id: "7",
                      sections:
                        [
                          {
                            title: "*",
                            id: "7",
                          },
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "あとがき",
                      id: "postscript",
                      sections:
                        [
                          {
                            title: "*",
                            id: "postscript",
                          },
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "Acknowledgements",
                      id: "acknowledgements",
                      sections:
                        [
                          {
                            title: "*",
                            id: "acknowledgements",
                          },
                        ],
                    },
                    {
                      sectPrefix: "",
                      title: "References",
                      id: "references",
                      sections:
                        [
                          {
                            title: "*",
                            id: "references",
                          },
                        ],
                    }
                  ];
