var FileName;
var Section;
var Subsection;
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

CurrentPage = "0";

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



/********************************************************************
    セクション番号の読み込み
*********************************************************************/

FileName = window.location.href.split("/").pop();

if (FileName.indexOf("-") !== -1) {
    Section = FileName.split("-")[0].substring(FileName[0].length - 1);
    Subsection = FileName.split("-")[1].substring(0, 1);
} else {
    Section = FileName.substring(0, FileName.indexOf(".htm"));
    Subsection = "";
};

/********************************************************************
    head/bodyの出力
*********************************************************************/


Text.open("GET", "texts/html.txt", false);
Text.send("");

if (Subsection == "") {
    HeadAndBody = Text.responseText.replace("<title>???</title>","<title>" + Section + "／ふたりのハードプロブレム</title>");
} else {
    HeadAndBody = Text.responseText.replace("<title>???</title>","<title>§" + Section + "-" + Subsection + "／ふたりのハードプロブレム</title>");
};

HeadAndBody = HeadAndBody.replace("images/???/favicon.png","images/" + Phase + "/favicon.png");

document.getElementsByTagName("html")[0].innerHTML = HeadAndBody;


/********************************************************************
    ヘッダー／フッターのリンク修正
*********************************************************************/


Prev = document.getElementsByClassName("NaviPrev");
Next = document.getElementsByClassName("NaviNext");

for (var i in Prev){
    switch (Section) {
        case "0":
            document.getElementById("HeaderPrev").style.visibility="hidden";
            document.getElementById("FooterPrev").style.visibility="hidden";
            Next[i].href = '1-1.html';
        break;
        case "1":
            switch (Subsection) {
                case "1":
                    Prev[i].href = '0.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
                case "7":
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = '2-1.html';
                break;
                default:
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
            };
        break;
        case "2":
            switch (Subsection){
                case "1":
                    Prev[i].href = '1-7.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
                case "6":
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = '3-1.html';
                break;
                default:
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
            };
        break;
        case "3":
            switch (Subsection){
                case "1":
                    Prev[i].href = '2-6.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
                case "8":
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = '4-1.html';
                break;
                default:
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
            };
        break;
        case "4":
            switch (Subsection){
                case "1":
                    Prev[i].href = '3-8.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
                case "6":
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = '5-1.html';
                break;
                default:
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
            };
        break;
        case "5":
            switch (Subsection){
                case "1":
                    Prev[i].href = '4-6.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
                case "8":
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = '6-1.html';
                break;
                default:
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
            };
        break;
        case "6":
            switch (Subsection){
                case "1":
                    Prev[i].href = '5-8.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
                case "5":
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = '7.html';
                break;
                default:
                    Prev[i].href = Section + '-' + (Number(Subsection) - 1) + '.html';
                    Next[i].href = Section + '-' + (Number(Subsection) + 1) + '.html';
                break;
            };
        break;
        case "7":
            Prev[i].href = '6-5.html';
            Next[i].href = 'afterwords.html';
        break;
        case "afterwords":
            Prev[i].href = '7.html';
            Next[i].href = 'acknowledgements.html';
        break;
        case "acknowledgements":
            Prev[i].href = 'afterwords.html';
            Next[i].href = 'referencess.html';
        break;
        case "references":
            Prev[i].href = 'acknowledgements.html';
            document.getElementById("HeaderNext").style.visibility="hidden";
            document.getElementById("FooterNext").style.visibility="hidden";
        break;
    };
};

/********************************************************************
    扉絵の表示変更
*********************************************************************/


if (Subsection == "1"){
    document.getElementById("SectionCover").src = "images/section" + Section + ".png";
}else{
    document.getElementById("SectionCover").style.display = "none";
};

/********************************************************************
    本文の表示
*********************************************************************/

if (Subsection !== "") {
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

