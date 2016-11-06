string=document.cookie;
flag4=string.indexOf("hpftflag4");
flag7=string.indexOf("hpftflag7");
if(flag7 == -1){
  if(flag4 == -1){
    document.getElementById("cover").src="../img/title1.png";
    document.getElementById("headerlogo").src="../img/hardproblem_logo_1_header.png"
  }else{
    document.getElementById("cover").src="../img/title2.png";
    document.getElementById("headerlogo").src="../img/hardproblem_logo_2_header.png"
  }
}else{
    document.getElementById("cover").src="../img/title3.png";
    document.getElementById("headerlogo").src="../img/hardproblem_logo_3_header.png"
};