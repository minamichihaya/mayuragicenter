string=document.cookie;
flag4=string.indexOf("ms3flag3");
flag7=string.indexOf("ms3flag7");
if(flag7 == -1){
  if(flag4 == -1){
    document.getElementById("cover").src="../img/ms3_title1.png";
  }else{
    document.getElementById("cover").src="../img/ms3_title2.png";
  }
}else{
    document.getElementById("cover").src="../img/ms3_title3.png";
}