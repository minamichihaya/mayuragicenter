string=document.cookie;
flag4=string.indexOf("hpftflag4");
flag7=string.indexOf("hpftflag7");
if(flag7 == -1){
  if(flag4 == -1){
    document.getElementById("cover").src="../img/title1.png";
    document.getElementById("p-cover").src="../img/title1.png";
  }else{
    document.getElementById("cover").src="../img/title2.png";
  }
}else{
    document.getElementById("cover").src="../img/title3.png";
}