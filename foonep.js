var ponetitle = "none";
var ptitleconf = "zero";
var countocolsec = 0;
function hone(){
  ptitleconf == "one"
  if(ptitleconf == "one"){
  document.getElementById("hone").style.color="#64e971"
  localStorage.setItem("P1title#a1","h1");
  }
}
function htwo(){
  ptitleconf == "two"
  if(ptitleconf == "two"){
  document.getElementById("htwo").style.color="#64e971"
  localStorage.setItem("P1title#a1","h2");
  }
}
function hthree(){
  ptitleconf == "three"
  if(ptitleconf == "three"){
  document.getElementById("hthree").style.color="#64e971"
  localStorage.setItem("P1title#a1","h3");
  }
}
function potitconf(){
  var countpone = 0;
  if(document.getElementById("ptitco").checked == true){
    countpone+=1
  }
  if(document.getElementById("ptitct").checked == true){
    countpone+=1
    
  }
  if(document.getElementById("ptitcth").checked == true){
    countpone+=1
  }
  if(countpone>1){
    alert("you have to select any one of the font size")
    document.getElementById("ptitct").checked=false;
    document.getElementById("ptitco").checked=false;
    document.getElementById("ptitcth").checked=false;
  }
  if(countpone==1){
    if(document.getElementById("ptitco").checked == true){
    localStorage.setItem('P1title#a1','h1');
  }
  if(document.getElementById("ptitct").checked == true){
    localStorage.setItem('P1title#a1','h2');
  }
  if(document.getElementById("ptitcth").checked == true){
    localStorage.setItem('P1title#a1','h3');
  }
  }
  countpone-countpone;
}
function stone(){
  var tittex = document.getElementById("ponetittex").value;
  var tittexcou = tittex.length;
  if(tittexcou <= 60){
    localStorage.setItem('P1title#a2',tittex);
  }
  if(tittexcou > 60){
    alert("your title mustn't exceed over 50 characters");
  }
}
function checkconfo(){
  var countptwo = 0;
  if(document.getElementById("checkbone").checked == true){
    countptwo+=1
  }
  if(document.getElementById("checkbtwo").checked == true){
    countptwo+=1
    
  }
  if(countptwo>1){
    alert("you have to select any one of the option")
    document.getElementById("checkbone").checked=false;
    document.getElementById("checkbtwo").checked=false;
  }
  if(countptwo==1){
    if(document.getElementById("checkbone").checked == true){
    localStorage.setItem('P1title#a3ch','yesfobord');
    document.getElementById("bordthi").style.display="block"
  }
  if(document.getElementById("checkbtwo").checked == true){
    localStorage.setItem('P1title#a3ch','nofobord');
  }
  }
  countptwo-countptwo;
}
function sttwo(){
  var checkx = document.getElementById("bordercheckaft").value;
  var checkxcou = checkx.length;
  if(checkxcou <= 30){
    localStorage.setItem('P1title#a3ch#px',checkx);
  }
  if(checkxcou > 30){
    alert("your border thickness mustn't exceed 30 size");
  }
}
function redo(){
  document.getElementById("redo").style.borderColor="black"
document.getElementById("reda").style.borderColor="black"
document.getElementById("redb").style.borderColor="black"
document.getElementById("redc").style.borderColor="black"
document.getElementById("redd").style.borderColor="black"
document.getElementById("rede").style.borderColor="black"

  document.getElementById("redo").style.borderColor="green"
  localStorage.setItem('bagcol#2of2',"#ef7171");
}
function reda(){
  document.getElementById("redo").style.borderColor="black"
document.getElementById("reda").style.borderColor="black"
document.getElementById("redb").style.borderColor="black"
document.getElementById("redc").style.borderColor="black"
document.getElementById("redd").style.borderColor="black"
document.getElementById("rede").style.borderColor="black"
  document.getElementById("reda").style.borderColor="green"
  localStorage.setItem('bagcol#2of2',"#e676e5");
}
function redb(){
  document.getElementById("redo").style.borderColor="black"
document.getElementById("reda").style.borderColor="black"
document.getElementById("redb").style.borderColor="black"
document.getElementById("redc").style.borderColor="black"
document.getElementById("redd").style.borderColor="black"
document.getElementById("rede").style.borderColor="black"
  document.getElementById("redb").style.borderColor="green"
  localStorage.setItem('bagcol#2of2',"#7091e7");
}
function redc(){
  document.getElementById("redo").style.borderColor="black"
document.getElementById("reda").style.borderColor="black"
document.getElementById("redb").style.borderColor="black"
document.getElementById("redc").style.borderColor="black"
document.getElementById("redd").style.borderColor="black"
document.getElementById("rede").style.borderColor="black"
  document.getElementById("redc").style.borderColor="green"
  localStorage.setItem('bagcol#2of2',"#74c9df");
}
function redd(){
  document.getElementById("redo").style.borderColor="black"
document.getElementById("reda").style.borderColor="black"
document.getElementById("redb").style.borderColor="black"
document.getElementById("redc").style.borderColor="black"
document.getElementById("redd").style.borderColor="black"
document.getElementById("rede").style.borderColor="black"
  document.getElementById("redd").style.borderColor="green"
  localStorage.setItem('bagcol#2of2',"#78ec91");
}
function rede(){
  document.getElementById("redo").style.borderColor="black"
document.getElementById("reda").style.borderColor="black"
document.getElementById("redb").style.borderColor="black"
document.getElementById("redc").style.borderColor="black"
document.getElementById("redd").style.borderColor="black"
document.getElementById("rede").style.borderColor="black"
  document.getElementById("rede").style.borderColor="green"
  localStorage.setItem('bagcol#2of2',"#d6c66e");
}
function redoo(){
  document.getElementById("redoo").style.borderColor="black"
document.getElementById("redaa").style.borderColor="black"
document.getElementById("redbb").style.borderColor="black"
document.getElementById("redcc").style.borderColor="black"
document.getElementById("reddd").style.borderColor="black"
document.getElementById("redee").style.borderColor="black"
  document.getElementById("redoo").style.borderColor="green"
  localStorage.setItem('bagcol#1of2',"#ef7171");
}
function redaa(){
  document.getElementById("redoo").style.borderColor="black"
document.getElementById("redaa").style.borderColor="black"
document.getElementById("redbb").style.borderColor="black"
document.getElementById("redcc").style.borderColor="black"
document.getElementById("reddd").style.borderColor="black"
document.getElementById("redee").style.borderColor="black"
  document.getElementById("redaa").style.borderColor="green"
  localStorage.setItem('bagcol#1of2',"#e676e5");
}
function redbb(){
  document.getElementById("redoo").style.borderColor="black"
document.getElementById("redaa").style.borderColor="black"
document.getElementById("redbb").style.borderColor="black"
document.getElementById("redcc").style.borderColor="black"
document.getElementById("reddd").style.borderColor="black"
document.getElementById("redee").style.borderColor="black"
  document.getElementById("redbb").style.borderColor="green"
  localStorage.setItem('bagcol#1of2',"#7091e7");
}
function redcc(){
  document.getElementById("redoo").style.borderColor="black"
document.getElementById("redaa").style.borderColor="black"
document.getElementById("redbb").style.borderColor="black"
document.getElementById("redcc").style.borderColor="black"
document.getElementById("reddd").style.borderColor="black"
document.getElementById("redee").style.borderColor="black"
  document.getElementById("redcc").style.borderColor="green"
  localStorage.setItem('bagcol#1of2',"#74c9df");
}
function reddd(){
  document.getElementById("redoo").style.borderColor="black"
document.getElementById("redaa").style.borderColor="black"
document.getElementById("redbb").style.borderColor="black"
document.getElementById("redcc").style.borderColor="black"
document.getElementById("reddd").style.borderColor="black"
document.getElementById("redee").style.borderColor="black"
  document.getElementById("reddd").style.borderColor="green"
  localStorage.setItem('bagcol#1of2',"#78ec91");
}
function redee(){
  document.getElementById("redoo").style.borderColor="black"
document.getElementById("redaa").style.borderColor="black"
document.getElementById("redbb").style.borderColor="black"
document.getElementById("redcc").style.borderColor="black"
document.getElementById("reddd").style.borderColor="black"
document.getElementById("redee").style.borderColor="black"
  document.getElementById("redee").style.borderColor="green"
  localStorage.setItem('bagcol#1of2',"#d6c66e");
}
function colorselo(){
  document.getElementById('tpdivot').style.display="none"
  document.getElementById("tpdivo").style.display="block"
  countocolsec+=1
  if(countocolsec >= 2){
    document.getElementById("butoverall").style.display = "block"
  }
}
function overallpone(){
  document.getElementById("forfunh").style.display="block"
}