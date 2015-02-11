string=document.cookie;
flag3=string.indexOf("hpftflag3");
flag7=string.indexOf("hpftflag7");
if(flag7 == -1){
  if(flag3 == -1){
    document.getElementById("cover").src="../img/title1.png";
  }else{
    document.getElementById("cover").src="../img/title2.png";
  }
}else{
    document.getElementById("cover").src="../img/title2.png";
}