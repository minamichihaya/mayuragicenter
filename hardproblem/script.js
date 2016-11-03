/**********************************************************************
***********************************************************************

        共通

***********************************************************************
**********************************************************************/



    /********************************************************************
        設定の読み込み
    *********************************************************************/

    var DarkColor = false;

    var NovelTitle = "ふたりのハードプロブレム";
    var SecList = [
        {title:"プロローグ",section:"prologue",subsection:"0",phase:"1"},
        {title:"虹を閉じ込めた瞳",section:"1",subsection:["1","2","3","4","5","6","7"],phase:"1"},
        {title:"海へいこう",section:"2",subsection:["1","2","3","4","5","6"],phase:"1"},
        {title:"その柔肌は誰がために",section:"3",subsection:["1","2","3","4","5","6","7","8"],phase:"1"},
        {title:"因果の玉突き",section:"4",subsection:["1","2","3","4","5","6"],phase:"2"},
        {title:"機械の少女",section:"5",subsection:["1","2","3","4","5","6","7","8"],phase:"2"},
        {title:"もうひとつの部屋",section:"6",subsection:["1","2","3","4","5"],phase:"2"},
        {title:"エピローグ",section:"epilogue",subsection:"0",phase:"2"},
        {title:"あとがき",section:"afterwords",subsection:"0",phase:"0"},
        {title:"Acknowledgements",section:"acknowledgements",subsection:"0",phase:"0"},
        {title:"References",section:"references",subsection:"0",phase:"0"}
    ];


    function GetSecData (SearchStr, SearchKey, OutputKey) {
        for (var i=0; i<=SecList.length; i++) {
            if (SecList[i][SearchKey] == SearchStr) {
                if (OutputKey == "index") {
                    return i;
                } else {
                    return SecList[i][OutputKey];
                }
                break;
            }
        }
    }


    function DisplayCover(){
        document.getElementById("LoadingIcon").style.display = "none";
        document.getElementById("Cover").style.display = "block";
    }


    function DisplayContent() {
        LoadText();
    }

    function ChangeLoading() {
        var cky = document.cookie;
        if (cky.indexOf("HPFTPhase=") != -1) {
            var Phase = cky.slice(cky.indexOf("HPFTPhase=")+10,cky.indexOf("HPFTPhase=")+11);
        } else {
            var Phase = "1";
        }
        document.getElementById("LoadingIcon").src = "images/" + Phase + "/loading.gif";
    }



    

/**********************************************************************
***********************************************************************

        カバーページ関連

***********************************************************************
**********************************************************************/

var Font;
var Scroll;

function MakeCover(){
    
    var cky = document.cookie;
    
    if (cky.indexOf("HPFTPhase=") != -1) {
        var Phase = cky.slice(cky.indexOf("HPFTPhase=") + 10, cky.indexOf("HPFTPhase=") + 11);
    } else {
        var Phase = "1";
    }
    
    if (cky.indexOf("HPFTRecentPage=") != -1){
        var RecentPage = cky.slice(cky.indexOf("HPFTRecentPage=") + 15);
        RecentPage = RecentPage.slice(0, RecentPage.indexOf(".html"));
    } else {
        var RecentPage = "prologue";
    }
    
    if (cky.indexOf("HPFTFont=") != -1) {
        var Font = cky.slice(cky.indexOf("HPFTFont=") + 9);
        Font = Font.slice(0,Font.indexOf("XXX"));
    } else {
        var Font = "YuMincho";
    }
    
    if (cky.indexOf("HPFTScroll=") != -1) {
        var tempstr = cky.slice(cky.indexOf("HPFTScroll=") + 11);
        Scroll = Number(tempstr.slice(0,tempstr.indexOf("pix")));
    } else {
        Scroll = 0;
    }
    
    if (cky.indexOf("HPFTBGC=") != -1) {
        var BGColor = cky.slice(cky.indexOf("HPFTBGC=") + 8);
        BGColor = BGColor.slice(0,BGColor.indexOf("Color"));
    } else {
        var BGColor = "Light";
    }
        
    target = document.getElementsByTagName("html");
    target[0].innerHTML = target[0].innerHTML.replace(/images\/[1-3]\//g,"images/" + Phase + "/");
    target = document.getElementById("Cover");
    target.style.backgroundImage = 'url("images/' + Phase + '/cover.png")';
    if (RecentPage == "prologue" && Scroll == 0) {
        target = document.getElementById("Continue");
        target.innerHTML = '<img src="images/' + Phase + '/start.png" class="Button">';
        target.href = "prologue.html";
    } else {
        target = document.getElementById("Continue");
        target.href = RecentPage + ".html";
    }
    
    target = document.getElementById("Index1");
    target.innerHTML = '<span class="SecSpan" id="prologue"><a href="' + SecList[0].section + '.html">' + SecList[0].title + '</a></span>';
    target = document.getElementById("SectionTitle");
    for (var i=0; i<=SecList.length-1; i++) {
        if (SecList[i].subsection != "0") {
            target.innerHTML = target.innerHTML + '§' + SecList[i].section + ' '　+ SecList[i].title;
            if (SecList[i+1].subsection != "0") {
                target.innerHTML = target.innerHTML + '<br>';
            }
        }
    }
    target = document.getElementById("Subsection");
    for (var i=0; i<=SecList.length-1; i++) {
        if (SecList[i].subsection !="0") {
            for (var j=0; j<=SecList[i].subsection.length-1; j++) {
                target.innerHTML = target.innerHTML
                                    + '<span class="SubsecSpan" id="' + SecList[i].section + '-' + SecList[i].subsection[j]
                                    + '"><a href="' + SecList[i].section + '-' + SecList[i].subsection[j]
                                    + '.html">' + SecList[i].subsection[j] + '</a></span>';
            }
            if (SecList[i+1].subsection != "0") {
                target.innerHTML = target.innerHTML + '<br>';
            }
        }
    }
    target = document.getElementById("Index3");
    for (var i=1; i<=SecList.length-1; i++) {
        if (SecList[i].subsection=="0") {          
            target.innerHTML = target.innerHTML
                                + '<span class="SecSpan" id="' + SecList[i].section
                                + '"><a href="' + SecList[i].section + '.html">'
                                + SecList[i].title + '</a></span>';
            if (i!=SecList.length-1) {
                target.innerHTML = target.innerHTML + '<br>';
            }
        }
    }
    
    if ((Phase != "3")||(RecentPage == "epilogue")) {
        switch (RecentPage) {
            case "prologue":
                if (Scroll != 0) {
                    target = document.getElementById(RecentPage);
                    target.style.border = "solid 1px #fff";      
                    target.style.marginLeft = "4px";
                    target.style.marginRight = "4px";
                }
                break;
            case "afterwords":
                break;
            case "acknowledgements":
                break;
            case "references":
                break;
            default:
                target = document.getElementById(RecentPage);
                target.style.border = "solid 1px #fff";
                target.style.marginLeft = "4px";
                target.style.marginRight = "4px";
                break;
        }
    }
    
    switch (Font) {
        case "YuMincho":
            YuMincho();
            break;
        case "NotoSansCJK":
            NotoSansCJK();
            break;
        case "Meiryo":
            Meiryo();
            break;
        case "HGMincho":
            HGMincho();
            break;
        case "DefaultSerif":
            DefaultSerif();
            break;
        case "DefaultSansSerif":
            DefaultSansSerif();
            break;
    }
    
    if (BGColor == "Dark") {
        ChoiceDark();
    } else {
        ChoiceLight();
    }
    
}

function Close() {
    document.getElementById("Index").style.display = "none";
    document.getElementById("Characters").style.display = "none";
    document.getElementById("KeyWords").style.display = "none";
    document.getElementById("Setting").style.display = "none";
    document.getElementById("Links").style.display = "none";
}

function OpenIndex() {
    document.getElementById("Index").style.display="block";    
}

function OpenCharacters() {
    document.getElementById("Characters").style.display="block";    
}

function OpenKeyWords() {
    document.getElementById("KeyWords").style.display="block"; 
}

function OpenSetting() {
    document.getElementById("Setting").style.display="block"; 
}

function OpenLinks() {
    document.getElementById("Links").style.display="block"; 
}

function YuMincho() {
    document.cookie = 'HPFTFont=YuMinchoXXX; max-age=31622400';
    Font = "YuMincho";
    document.getElementById("YuMincho").innerHTML = "Yū Minchō" + " ✓";
    document.getElementById("NotoSansCJK").innerHTML = "Noto Sans CJK";
    document.getElementById("HGMincho").innerHTML = "HG Minchō";
    document.getElementById("Meiryo").innerHTML = "Meiryō";
    document.getElementById("DefaultSerif").innerHTML = "Default (Serif)";
    document.getElementById("DefaultSansSerif").innerHTML = "Default (Sans-Serif)";
}

function NotoSansCJK() {
    document.cookie = 'HPFTFont=NotoSansCJKXXX; max-age=31622400';
    Font = "NotoSansCJK";
    document.getElementById("YuMincho").innerHTML = "Yū Minchō";
    document.getElementById("NotoSansCJK").innerHTML = "Noto Sans CJK" + " ✓";
    document.getElementById("HGMincho").innerHTML = "HG Minchō";
    document.getElementById("Meiryo").innerHTML = "Meiryō";
    document.getElementById("DefaultSerif").innerHTML = "Default (Serif)";
    document.getElementById("DefaultSansSerif").innerHTML = "Default (Sans-Serif)";
}

function HGMincho() {
    document.cookie = 'HPFTFont=HGMinchoXXX; max-age=31622400';
    Font = "HGMincho";
    document.getElementById("YuMincho").innerHTML = "Yū Minchō";
    document.getElementById("NotoSansCJK").innerHTML = "Noto Sans CJK";
    document.getElementById("HGMincho").innerHTML = "HG Minchō" + " ✓";
    document.getElementById("Meiryo").innerHTML = "Meiryō";
    document.getElementById("DefaultSerif").innerHTML = "Default (Serif)";
    document.getElementById("DefaultSansSerif").innerHTML = "Default (Sans-Serif)";
}

function Meiryo() {
    document.cookie = 'HPFTFont=MeiryoXXX; max-age=31622400';
    Font = "Meiryo";
    document.getElementById("YuMincho").innerHTML = "Yū Minchō";
    document.getElementById("NotoSansCJK").innerHTML = "Noto Sans CJK";
    document.getElementById("HGMincho").innerHTML = "HG Minchō";
    document.getElementById("Meiryo").innerHTML = "Meiryō" + " ✓";
    document.getElementById("DefaultSerif").innerHTML = "Default (Serif)";
    document.getElementById("DefaultSansSerif").innerHTML = "Default (Sans-Serif)";
}

function DefaultSerif() {
    document.cookie = "HPFTFont=DefaultSerifXXX; max-age=31622400";
    Font = "DefaultSerif";
    document.getElementById("YuMincho").innerHTML = "Yū Minchō";
    document.getElementById("NotoSansCJK").innerHTML = "Noto Sans CJK";
    document.getElementById("HGMincho").innerHTML = "HG Minchō";
    document.getElementById("Meiryo").innerHTML = "Meiryō";
    document.getElementById("DefaultSerif").innerHTML = "Default (Serif)" + " ✓";
    document.getElementById("DefaultSansSerif").innerHTML = "Default (Sans-Serif)";
}

function DefaultSansSerif() {
    document.cookie = "HPFTFont=DefaultSansSerifXXX; max-age=31622400";
    document.getElementById("YuMincho").innerHTML = "Yū Minchō";
    document.getElementById("NotoSansCJK").innerHTML = "Noto Sans CJK";
    document.getElementById("HGMincho").innerHTML = "HG Minchō";
    document.getElementById("Meiryo").innerHTML = "Meiryō";
    document.getElementById("DefaultSerif").innerHTML = "Default (Serif)";
    document.getElementById("DefaultSansSerif").innerHTML = "Default (Sans-Serif)" + " ✓";
}

function ChoiceLight() {
    document.cookie = "HPFTBGC=LightColor; max-age=31622400";
    document.getElementById("ChoiceLight").innerHTML = "Light ✓";
    document.getElementById("ChoiceDark").innerHTML = "Dark";
}

function ChoiceDark() {
    document.cookie = "HPFTBGC=DarkColor; max-age=31622400";
    document.getElementById("ChoiceLight").innerHTML = "Light";
    document.getElementById("ChoiceDark").innerHTML = "Dark ✓";
}

function ConfirmDB() {
    document.getElementById("ConfirmIS").style.display = "none";
    document.getElementById("YesNoIS").style.display = "none";
    document.getElementById("ConfirmDB").style.display = "block";
    document.getElementById("YesNoDB").style.display = "block";
    document.getElementById("Confirm").style.display = "block";
}

function ConfirmIS() {
    document.getElementById("ConfirmDB").style.display = "none";
    document.getElementById("YesNoDB").style.display = "none";
    document.getElementById("ConfirmIS").style.display = "block";
    document.getElementById("YesNoIS").style.display = "block";
    document.getElementById("Confirm").style.display = "block";
}

function DeleteBookmark() {
    
    var cky = document.cookie;
    if (cky.indexOf("HPFTRecentPage=") != -1){
        var RecentPage = cky.slice(cky.indexOf("HPFTRecentPage=") + 15);
        RecentPage = RecentPage.slice(0, RecentPage.indexOf(".html"));
    } else {
        var RecentPage = "prologue";
    }

    var target;
    target = document.getElementsByTagName("html");
    target[0].innerHTML = target[0].innerHTML.replace(/images\/[1-3]\//g,"images/1/");
    target = document.getElementById("Cover");
    target.style.backgroundImage = 'url("images/1/cover.png")';
    target = document.getElementById("Continue");
    target.href = "prologue.html";
    target.innerHTML = '<img src="images/1/start.png" class="Button">';
    target = document.getElementById(RecentPage);
    target.style.border = "none";  

    document.cookie = 'HPFTPhase=1; max-age=31622400';
    document.cookie = 'HPFTRecentPage=prologue.html; max-age=31622400';
    document.cookie = 'HPFTScroll=0pix; max-age=31622400';
    
    CloseConfirm();
}

function InitializeSettings() {
    
    YuMincho();
    ChoiceLight();
    CloseConfirm();
}


function CloseConfirm() {
    document.getElementById("Confirm").style.display = "none";
}

function OpenLink() {
    alert("近日実装予定ですʅ(◔౪◔ ) ʃ");
}


/**********************************************************************
***********************************************************************

        本文ページ関連

***********************************************************************
**********************************************************************/

function MakeContent() {

    var FileName;
    var Section;
    var Subsection;
    var SecTitle;
    var Prev = new Array();
    var Next = new Array();
    var Text = new XMLHttpRequest();
    var HeadAndBody;
    var CurrentPage;
    var CurrentSection;
    var CurrentSubsection;
    var HTML = new Array();
    var Content;
    var target;

    /********************************************************************
        セクション番号の読み込み
    *********************************************************************/

    FileName = window.location.href.split("/").pop();

    if (FileName.indexOf("-") !== -1) {
        Section = FileName.split("-")[0].substring(FileName[0].length - 1);
        Subsection = FileName.split("-")[1].substring(0, 1);
    } else {
        Section = FileName.substring(0, FileName.indexOf(".htm"));
        Subsection = "0";
    }
    

    SecTitle = GetSecData(Section,"section","title");
    
    var cky = document.cookie;
    if (cky.indexOf("HPFTPhase=") != -1) {
        var Phase = cky.slice(cky.indexOf("HPFTPhase=") + 10, cky.indexOf("HPFTPhase=") + 11);
    } else {
        var Phase = "1";
    }
    if (cky.indexOf("HPFTFont=") != -1) {
        var Font = cky.slice(cky.indexOf("HPFTFont=") + 9);
        Font = Font.slice(0,Font.indexOf("XXX"));
    } else {
        var Font = "YuMincho";
    }
    
    /********************************************************************
        head/bodyの出力
    *********************************************************************/
    

    Text.open("GET", "texts/html.txt", false);
    Text.send("");
    target = document.getElementsByTagName("body");
    target[0].outerHTML = Text.responseText;
    
    

    
    /********************************************************************
        CSSの読み込み
    *********************************************************************/
    
    if (cky.indexOf("HPFTBGC=") != -1) {
        var BGColor = cky.slice(cky.indexOf("HPFTBGC=") + 8);
        BGColor = BGColor.slice(0,BGColor.indexOf("Color"));
    } else {
        var BGColor = "Light";
    }

    HTML = document.getElementsByTagName("html");
    HTML[0].innerHTML = HTML[0].innerHTML + '<link rel="stylesheet" href="style.css" type="text/css">';
    
    
    /********************************************************************
        各種タグ変更
    *********************************************************************/


    
    target = document.getElementsByTagName("title");
    if (Subsection == "0") {
        target[0].innerHTML = SecTitle + "／" + target[0].innerHTML;
    } else {
        target[0].innerHTML = "§" + Section + " " + SecTitle + "(" + Subsection + ")／" + target[0].innerHTML;
    }
    target = document.getElementsByTagName("link");
    target[0].outerHTML = target[0].outerHTML.replace('<link rel="shortcut icon" href="images/1/favicon.png" type="image/png">',
                                                      '<link rel="shortcut icon" href="images/'+ Phase + '/favicon.png" type="image/png">');
    target = document.getElementById("LoadingIcon");
    target.src = 'images/' + Phase + '/loading.gif';
    if (Subsection == "1") {
        target = document.getElementById("SecCoverImg");
        target.src = 'images/section' + Section + '.png';
        target = document.getElementById("SecCoverLogo");
        target.src = 'images/' + Phase + '/logo_sl.png';
        switch (Section) {
            case "1":
                target.style.right = "5px"
                break;
            case "2":
                target.style.left = "5px"
                break;
            case "3":
                target.style.left = "5px"
                break;
            case "4":
                target.style.right = "5px"
                break;
            case "5":
                target.style.left = "5px"
                break;
            case "6":
                target.style.right = "5px"
                break;
        }
        
    } else {
        target = document.getElementById("SectionCover");
        target.style.display = "none"
    }
    target = document.getElementById("SecCoverLogo");
    

    
    /********************************************************************
        ヘッダー／フッターのリンク修正
    *********************************************************************/

    Prev = document.getElementsByClassName("NaviPrev");
    Next = document.getElementsByClassName("NaviNext");

    
    for (var i in Prev) {
        if (Section == "prologue") {
            document.getElementById("HeaderPrev").style.visibility="hidden";
            document.getElementById("FooterPrev").style.visibility="hidden";
            Next[i].href = '1-1.html';
        } else if (Section == "references") {
            Prev[i].href = 'acknowledgements.html';
            document.getElementById("HeaderNext").style.visibility="hidden";
            document.getElementById("FooterNext").style.visibility="hidden";
        } else {
            if (Subsection == "0") {
                switch (Section) {
                    case "epilogue":
                        Prev[i].href = '6-5.html';
                        Next[i].href = 'afterwords.html';
                        break;
                    case "afterwords":
                        Prev[i].href = 'epilogue.html';
                        Next[i].href = 'acknowledgements.html';
                        break;
                    case "acknowledgements":
                        Prev[i].href = 'afterwords.html';
                        Next[i].href = 'references.html';
                        break;
                }
            } else {
                if (Subsection == "1") {
                    if (Section == "1") {
                        Prev[i].href = 'prologue.html';
                        Next[i].href = '1-2.html';
                    } else {
                        Prev[i].href = String(Number(Section) - 1) + "-"
                                        + String(SecList[GetSecData(String(Number(Section)-1),"section","index")]["subsection"].length) 
                                        + '.html';
                        Next[i].href = Section + "-" + String(Number(Subsection) + 1) + '.html';
                    }
                } else if (Subsection == String(SecList[GetSecData(Section,"section","index")]["subsection"].length)) {
                    if (Section == "6") {
                        Prev[i].href = '6-4.html';
                        Next[i].href = 'epilogue.html';
                    } else {
                        Prev[i].href = Section + "-" + String(Number(Subsection) - 1) + '.html';
                        Next[i].href = String(Number(Section) + 1) + "-" + '1.html';
                    }
                } else {
                    Prev[i].href = Section + "-" + String(Number(Subsection) - 1) + '.html';
                    Next[i].href = Section + "-" + String(Number(Subsection) + 1) + '.html';
                }
            }
        }
    }
    
     /********************************************************************
            背景色の変更
    *********************************************************************/
    
    
    if (BGColor == "Dark") {
        document.getElementById("TextBackground").style.backgroundColor = "#222";
        document.getElementById("Header").style.color = "#fff";
        document.getElementById("Footer").style.color = "#fff";
    } else {
        document.getElementById("TextBackground").style.backgroundColor = "#fff";
        document.getElementById("Header").style.color = "#333";
        document.getElementById("Footer").style.color = "#333";
    }
    
}

    /********************************************************************
            本文の表示
    *********************************************************************/
    function LoadText() {
        var FileName = window.location.href.split("/").pop();

        if (FileName.indexOf("-") !== -1) {
            var Section = FileName.split("-")[0].substring(FileName[0].length - 1);
            var Subsection = FileName.split("-")[1].substring(0, 1);
        } else {
            var Section = FileName.substring(0, FileName.indexOf(".htm"));
            var Subsection = "0";
        };
        
        var cky = document.cookie;
            if (cky.indexOf("HPFTPhase=") != -1) {
                var Phase = cky.slice(cky.indexOf("HPFTPhase=") + 10, cky.indexOf("HPFTPhase=") + 11);
            } else {
                var Phase = "1";
        }
        
        

        var SecTitle = GetSecData(Section,"section","title");

        var Text = new XMLHttpRequest();

        if (Subsection !== "0") {
            Text.open("GET", "texts/" + Section + "-" + Subsection + ".txt", false);
        } else {
            Text.open("GET", "texts/" + Section + ".txt", false);
        };

        Text.send("");

        var Content = Text.responseText;

        while (Content.indexOf('|') > -1) {
            Content = Content.replace('|','<ruby>');
            Content = Content.replace('《','<rp>[</rp><rt>');
            Content = Content.replace('》','</rt><rp>]</rp></ruby>');
        };

        while (Content.indexOf('!sc') > -1) {
            Content = Content.replace('!sc','<span class="SC">');
            Content = Content.replace('sc!','</span>');
        };
        
        Content = Content.replace(/――/g,'<span class="Dash">――</span>');

        document.getElementById("Content").innerHTML = Content;
        
        var cky=document.cookie;
        if (cky.indexOf("HPFTFont=") != -1) {
            var Font = cky.slice(cky.indexOf("HPFTFont=") + 9);
            Font = Font.slice(0,Font.indexOf("XXX"));
        } else {
            var Font = "YuMincho";
        }
        
        if (cky.indexOf("HPFTBGC=") != -1) {
            var BGColor = cky.slice(cky.indexOf("HPFTBGC=") + 8);
            BGColor = BGColor.slice(0,BGColor.indexOf("Color"));
        } else {
            var BGColor = "Light";
        }
        
        switch (Font) {
            case "YuMincho":
                document.getElementById("Content").style.fontFamily = '"游明朝","游明朝体","Yu Mincho","YuMincho"';
                if (BGColor == "Dark") {
                    document.getElementById("Content").style.color = "#fff";
                } else {
                    document.getElementById("Content").style.color = "#000";
                }
                for (var i=0; i<=document.getElementsByClassName("SC").length - 1; i++) {
                    document.getElementsByClassName("SC")[i].style.fontFamily = '"SimSun"';
                    document.getElementsByClassName("SC")[i].style.fontSize = "105%";
                    if (BGColor == "Dark") {
                        document.getElementsByClassName("SC")[i].style.color = '#fff';
                    } else {
                        document.getElementsByClassName("SC")[i].style.color = '#404040';
                    }
                }
                break;
            case "NotoSansCJK":
                document.getElementById("Content").style.fontFamily = '"Noto Sans CJK JP", "源ノ角ゴシック"';
                if (BGColor == "Dark") {
                    document.getElementById("Content").style.color = "#fff";
                } else {
                    document.getElementById("Content").style.color = "#444";
                }
                document.getElementById("Content").style.fontWeight = "300";
                for (var i=0; i<=document.getElementsByClassName("SC").length - 1; i++) {
                    document.getElementsByClassName("SC")[i].style.fontFamily = '"Noto Sans CJK SC", "Source Han Sans SC"';
                }
                break;
            case "HGMincho":
                document.getElementById("Content").style.fontFamily = '"HG明朝B","HG MinchoB"';
                if (BGColor == "Dark") {
                    document.getElementById("Content").style.color = "#eee";
                } else {
                    document.getElementById("Content").style.color = '#444';
                }
                for (var i=0; i<=document.getElementsByClassName("SC").length - 1; i++) {
                    document.getElementsByClassName("SC")[i].style.fontFamily = '"SimSun"';
                    document.getElementsByClassName("SC")[i].style.fontWeight = '800';
                }
                break;
            case "Meiryo":
                document.getElementById("Content").style.fontFamily = '"メイリオ","Meiryo"';
                if (BGColor == "Dark") {
                    document.getElementById("Content").style.color = "#fff";
                } else {
                    document.getElementById("Content").style.color = '#444';
                }
                for (var i=0; i<=document.getElementsByClassName("SC").length - 1; i++) {
                    document.getElementsByClassName("SC")[i].style.fontFamily = '"Microsoft YaHei"';
                    if (BGColor == "Dark") {
                        document.getElementsByClassName("SC")[i].style.fontWeight = '300';
                    } else {
                        document.getElementsByClassName("SC")[i].style.fontWeight = '400';
                    }
                }
                break;
            case "DefaultSerif":
                document.getElementById("Content").style.fontFamily = 'serif';
                if (BGColor == "Dark") {
                    document.getElementById("Content").style.color = "#fff";
                } else {
                    document.getElementById("Content").style.color = '#000';
                }
                break;
            case "DefaultSansSerif":
                document.getElementById("Content").style.fontFamily = 'sans-serif';
                if (BGColor == "Dark") {
                    document.getElementById("Content").style.color = "#fff";
                } else {
                    document.getElementById("Content").style.color = '#000';
                }
                break;
        }
        
        if ((document.getElementsByClassName("Dash")[0] != undefined) && (Font == "YuMincho")) {
            for (var i = 0; i <= document.getElementsByClassName("Dash").length - 1; i++) {
                document.getElementsByClassName("Dash")[i].style.fontFamily = '"ＭＳ 明朝", "MS Mincho", serif';
            }   
        }
        
        document.getElementById("TextBackground").style.visibility = "visible";
        document.getElementById("LoadingIcon").style.display = "none";

        
        /********************************************************************
           ページのスクロール
        *********************************************************************/
        
        if (document.cookie.indexOf("HPFTRecentPage=") != -1){
            var RecentPage = document.cookie.slice(document.cookie.indexOf("HPFTRecentPage=") + 15);
            RecentPage = RecentPage.slice(0, RecentPage.indexOf(".html"));
        } else {
            var RecentPage = "prologue";
        }
        
        if (document.cookie.indexOf("HPFTScroll=") != -1) {
        var tempstr = document.cookie.slice(document.cookie.indexOf("HPFTScroll=") + 11);
        Scroll = Number(tempstr.slice(0,tempstr.indexOf("pix")));
        } else {
            Scroll = 0;
        }
        
        if (RecentPage + ".html" == FileName) {
            window.scrollTo(0,Scroll);
        }        
        
        /********************************************************************
           栞の書き込み
        *********************************************************************/
        
        var ScrollCheck = false;
        
        if (RecentPage.indexOf("-") !== -1) {
            var RecentSection = RecentPage.split("-")[0];
            var RecentSubsection = RecentPage.split("-")[1];
        } else {
            var RecentSection = RecentPage;
            var RecentSubsection = "0";
        }
        
        if (Phase == "3") {
            if (Section == "afterwords" || Section == "acknowledgements" || Section == "references") {
                document.cookie = 'HPFTRecentPage=' + Section + '.html; max-age=158112000';
                ScrollCheck = true;
            }
        } else if (RecentPage == "prologue") {
            document.cookie = 'HPFTRecentPage=' + FileName + '; max-age=158112000';
            ScrollCheck = true;
        } else {
            switch (Section) {
                case "prologue":
                    if (RecentSection == "prologue") {
                        ScrollCheck = true;
                    }
                    break;
                case "epilogue":
                    document.cookie = 'HPFTRecentPage=epilogue.html; max-age=158112000';
                    ScrollCheck = true;
                    break;
                case "afterwords":
                    break;
                case "acknowledgements":
                    break;
                case "references":
                    break;
                default:
                    if (Number(RecentSection) < Number(Section)) {
                        document.cookie ='HPFTRecentPage=' + FileName + '; max-age=158112000';
                        ScrollCheck = true;
                        break;
                    } else if (Number(RecentSection) == Number(Section)) {
                        if (Number(RecentSubsection) <= Number(Subsection)) {
                            document.cookie ='HPFTRecentPage=' + FileName + '; max-age=158112000';
                            ScrollCheck = true;
                        }
                    }
                    break;
            }
            
        }
        
        /*alert("Phase=" + Phase + ",  RecentPage=" + RecentPage + ",  RecentSection=" + RecentSection + ",  RecentSubsection=" + RecentSubsection + ",  Section=" + Section + ",  Subsection=" + Subsection + ",  ScrollCheck=" + ScrollCheck + ",  Cookie=" + document.cookie);*/
        
        if (Phase == "1" && Section == "3" && Subsection == "8") {
                var PhaseCookie = 'HPFTPhase=2; max-age=158112000';
                document.cookie = PhaseCookie;        

        } else {
            if (Number(Phase) < Number(GetSecData(Section,"section","phase"))) {
                var PhaseCookie = 'HPFTPhase=' + GetSecData(Section,"section","phase") + '; max-age=158112000';
                document.cookie = PhaseCookie;
            }
        }
        
        if (window.scrollY != NaN) {
            document.cookie =  'HPFTScroll=' + window.scrollY + 'pix; max-age=158112000';
        } else {
            document.cookie =  'HPFTScroll=0pix; max-age=158112000';
        }
        
        if (ScrollCheck) {
            document.onscroll = function() {
                document.cookie =  'HPFTScroll=' + window.scrollY + 'pix; max-age=158112000';
                if (window.scrollY / (document.documentElement.clientHeight - document.body.clientHeight) >= 0.95) {
                    if (Section == "3" && Subsection == "8" && Phase == "1") {
                        document.cookie = 'HPFTPhase=2; max-age=158112000';                   
                    } else if (Section == "epilogue" && Phase == "2") {
                        document.cookie = 'HPFTPhase=3; max-age=158112000';
                    }
                }
            }
        }
    }

