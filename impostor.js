let ile = document.getElementById("ile");
let rozp = document.getElementById("rozp");
let kolej = document.getElementById("kolej");
let haslo = document.getElementById("haslo");
let shbutton = document.getElementById("sh");

var lgraczy = 0;
var rozpgracz = 0;
var impostor = 0;
var odp = "";
var pok = false;
var kolejka = 0;

const lista = ["JABŁKO","GRUSZKA","BANAN","JAJKO","LUPA","FOTEL","KUPA","SKARPETY"];

function sh(){
  if (pok){
    shbutton.innerHTML = "SCHOWAJ";
    if (kolejka == impostor){
      haslo.innerHTML = "JESTEŚ IMPOSTOREM";
    }
    else {
      haslo.innerHTML = odp;
    }
  }
  else {
    haslo.innerHTML = "";
    shbutton.innerHTML = "POKAŻ";
  }
  pok = !pok;
}

function reset(){
  kolej.innerHTML = "GRACZ NR 1";
  lgraczy = ile.value;
  rozpgracz = Math.floor(Math.random() * lgraczy);
  impostor = Math.floor(Math.random() * lgraczy);
  odp = lista[Math.floor(Math.random() * lista.length)];
  kolejka = 0;
  rozp.innerHTML = "ROZPOCZYNA GRACZ NR " + rozpgracz.toString();
  if (pok) {sh();}
}

function next(){
  if (pok) {sh();}
  kolejka = (kolejka + 1)%lgraczy;
  kolej.innerHTML = (kolejka+1).toString();
}

reset();
