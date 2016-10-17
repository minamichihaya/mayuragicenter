/**********************************************************************
***********************************************************************

        共通

***********************************************************************
**********************************************************************/

var NovelTitle = "ふたりのハードプロブレム";
var SecList = [
    {title:"プロローグ",section:"prologue",subsection:"0",phase:"1"},
    {title:"虹を閉じ込めた瞳",section:"1",subsection:["1","2","3","4","5","6","7"],phase:"1"},
    {title:"海へいこう",section:"2",subsection:["1","2","3","4","5","6"],phase:"1"},
    {title:"その柔肌は誰がために",section:"3",subsection:["1","2","3","4","5","6","7","8"],phase:"1"},
    {title:"因果の玉突き",section:"4",subsection:["1","2","3","4","5","6"],phase:"2"},
    {title:"機械の少女",section:"5",subsection:["1","2","3","4","5","6","7","8"],phase:"2"},
    {title:"もうひとつの部屋",section:"6",subsection:["1","2","3","4","5"],phase:"2"},
    {title:"エピローグ",section:"epilogue",subsection:"0",phase:"3"},
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
                break;
            }
        }
    }
}

/**********************************************************************
***********************************************************************

        カバーページ関連

***********************************************************************
**********************************************************************/


function MakeCover(){
    
    
};

function OpenIndex(){
    var target = document.getElementById("Index");
    target.style.display="block";    
};

function CloseIndex(){
    var target = document.getElementById("Index");
    target.style.display="none";
};

function OpenCharacters(){
    var target = document.getElementById("Characters");
    target.style.display="block";    
};

function CloseCharacters(){
    var target = document.getElementById("Characters");
    target.style.display="none";
};

function OpenKeyWords(){
    var target = document.getElementById("KeyWords");
    target.style.display="block"; 
};

function CloseKeyWords(){
    var target = document.getElementById("KeyWords");
    target.style.display="none";
};

function OpenSetting(){
    var target = document.getElementById("Setting");
    target.style.display="block"; 
};

function CloseSetting(){
    var target = document.getElementById("Setting");
    target.style.display="none";
};



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
    var Phase;
    var HTML = new Array();
    var Content;


    /********************************************************************
        栞の読み込み
    *********************************************************************/

    /*
    
    CurrentPage = "1-2";

    if (CurrentPage.indexOf("-") >= 0) {
        CurrentSection = CurrentPage.split("-")[0];
        CurrentSubsection = CurrentPage.split("-")[1];
    } else {
        CurrentSection = CurrentPage;
        CurrentSubsection = "";
    };


    if (Number(CurrentSection) <= 3) {
        Phase = "1";        
    } else if (Number(CurrentSection) <= 6) {
        Phase = "2";
    } else {
        Phase = "3";
    };
    
    */

    Phase = "2";
    

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
    };

    SecTitle = GetSecData(Section,"section","title");
    
    /********************************************************************
        head/bodyの出力"0"
    *********************************************************************/
    

    Text.open("GET", "texts/html.txt", false);
    Text.send("");

    if (Subsection == "0") {
        HeadAndBody = Text.responseText.replace("<title>???</title>",
                                                "<title>" + SecTitle + "／" + NovelTitle + "</title>");
    } else {
        HeadAndBody = Text.responseText.replace("<title>???</title>",
                                                "<title>§" + Section + " " + SecTitle + "(" + Subsection + "／" + NovelTitle + "</title>");
    };

    HeadAndBody = HeadAndBody.replace("images/???/favicon.png","images/" + Phase + "/favicon.png");

    if (Subsection == "1"){
        HeadAndBody = HeadAndBody.replace("images/section???.png","images/section" + Section + ".png");
    }else{
        HeadAndBody = HeadAndBody.replace('<img src="images/section???.png" id="SectionCover">','');
    };


    document.getElementsByTagName("html")[0].innerHTML = HeadAndBody;

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
                if (Section == "epilogue") {
                    Prev[i].href = '6-5.html';
                    Next[i].href = 'afterwords.html';
                } else {
                    Prev[i].href = SecList[GetSecData(Section,"section","index") - 1]["section"] + ".html";
                    Next[i].href = SecList[GetSecData(Section,"section","index") + 1]["section"] + ".html";
                }
            } else if (Subsection == "1") {
                    if (Section == "1") {
                        Prev[i].href = 'prologue.html';
                        Next[i].href = '1-2.html';
                    } else {
                        Prev[i].href = String(Number(Section) - 1) + "-"
                                        + String(SecList[GetSecData(Section,"section","index")]["subsection"].length + 1) 
                                        + '.html';
                        Next[i].href = Section + "-" + String(Number(Subsection) + 1) + '.html';
                    }
            } else if (Subsection == SecList[GetSecData(Section,"section","index")]["subsection"].length + 1) {
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
 

    /********************************************************************
        本文の表示
    *********************************************************************/

    if (Subsection !== "0") {
        Text.open("GET", "texts/" + Section + "-" + Subsection + ".txt", false);
    } else {
        Text.open("GET", "texts/" + Section + ".txt", false);
    };

    Text.send("");

    Content = Text.responseText;

    while (Content.indexOf('|') > -1) {
        Content = Content.replace('|','<ruby>');
        Content = Content.replace('《','<rp>[</rp><rt>');
        Content = Content.replace('》','</rt><rp>]</rp></ruby>');
    };

    while (Content.indexOf('!sc') > -1) {
        Content = Content.replace('!sc','<span class="SC">');
        Content = Content.replace('sc!','</span>');
    };

    document.getElementById("Content").innerHTML = Content;



    /********************************************************************
        CSSの読み込み
    *********************************************************************/


    HTML = document.getElementsByTagName("html");
    HTML[0].innerHTML = HTML[0].innerHTML + '<link rel="stylesheet" href="style.css" type="text/css">';

}
