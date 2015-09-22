string=document.cookie;
flag3=string.indexOf("ms3flag3");
flag7=string.indexOf("ms3flag7");
if(flag7 == -1){
  if(flag3 == -1){
    document.getElementById("cover").src="../img/ms3_title0.png";
  }else{
    document.getElementById("cover").src="../img/ms3_title0.png";
  }
}else{
    document.getElementById("cover").src="../img/ms3_title0.png";
}