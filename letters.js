var sq = [0,0,0,0,0,0,0,0,0];
var x = document.getElementById("lettersdiv");
for (var i = 0 ; i <= 8 ; i++){
  sq[i] = document.createElement("div");
  //sq[i].id = String(i);
  var style = "left: " + String(5+i*10) +"%; right: " + String(85-i*10) + "%;";
  sq[i].classList.add("letters");
  sq[i].style = style;
  sq[i].innerHTML = "<h1>&nbsp;<h1>";
  x.appendChild(sq[i]);
}

//the stuff above loads the letter squares

var inc = 0; //which letter we're at

const VL = ['A','E','I','O','U']
const freqV = [15,21,13,13,5]
var SV = 0;
var sV = [0,0,0,0,0]
for (i=0;i<5;i++){
  SV += freqV[i];
  sV[i] = SV
}

const CL = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
const freqC = [2,3,6,2,3,2,1,1,5,4,8,4,1,9,9,9,1,1,1,1,1]
var SC = 0
var sC = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for (i=0;i<21;i++){
  SC += freqC[i];
  sC[i] = SC
}

timer = document.getElementById("timer");

const audio = new Audio('clockaudio.mp3');

function CTDWN(){
  var t = 30; //HOW LONG TO COUNT
  audio.play();
  function step(){
    t--;
    console.log("reduced!")
    if (t == 5){
      
    }
    timer.innerHTML = String(t);
    console.log("replaced/ing " + timer.innerHTML +" with " + String(t))
    timer.innerHTML = String(t);
    if (t==0) {clearInterval(ch); return 0;}
  }
  console.log("DONE WITH defining step()")
  ch = setInterval(step,1000);
}

function V(){ //called when vowel button
  r = SV*Math.random();
  console.log(r)
  for (i=0;i<5;i++){
    if (sV[i] > r){
      sq[inc].innerHTML = "<h1>" + VL[i] + "</h1>"
      break
    }
  }
  inc++;
}

function C(){ //called when consonant button
  r = SC*Math.random();
  for (i=0;i<21;i++){
    if (sC[i] > r){
      sq[inc].innerHTML = "<h1>" + CL[i] + "</h1>"
      break
    }
  }
  inc++;
}
