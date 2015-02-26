string=document.cookie;
flag3=string.indexOf("metastableflag3");
flag7=string.indexOf("metastableflag7");
if(flag7 == -1){
  if(flag3 == -1){
    document.getElementById("cover").src="../img/ms3_title0.png";
  }else{
    document.getElementById("cover").src="../img/ms3_title0.png";
  }
}else{
    document.getElementById("cover").src="../img/ms3_title0.png";
}