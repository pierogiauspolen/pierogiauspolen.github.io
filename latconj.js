//sum,esse present active indicative

const ses = [" sum"," es"," est"," sumus"," estis"," sunt"];

//BLENDING

const VIn = ['a','e',"i","'"]
const VSe = ['a','e','i','o','u','ā','ē','ō'/*,'0'*/]
const BlendChart = [
  ['e','ā','ā','o','a','ē','ā','ō'/*,'a'*/],
  ['ea','ē','ē','eo','e','eā','ē','eō'/*,'e'*/],
  ['ia','ī','ī','io','iu','iā','iē','iō'/*,'i'*/],
  ['ia','e','i','io','iu','iā','iē','iō'/*,'i'*/],
]

function blend(s1,s2){
  if (s2 == null){
    return "-"
  }
  else if (s1 == ""){
    return s2.replace(/̄̆/g,"")
  }
  else if (["s","t","d"].includes(s1.charAt(s1.length - 1)) && s2.charAt(0)=="t"){
    if (['a','e','i','o','u','y'].includes(s1.charAt(s1.length - 2))){
      return s1.substring(0,s1.length - 1) + "ss" + s2.substring(1,s2.length)
    }
    else {
      return s1.substring(0,s1.length - 1) + "s" + s2.substring(1,s2.length)
    }
  }
  else if (s2.charAt(0) == "-"){
    if (VIn.includes(s1.charAt(s1.length - 1))){ 
      if (VSe.includes(s2.substring(1,3))){
      return (s1.substring(0,s1.length - 1) + BlendChart[VIn.indexOf(s1.charAt(s1.length - 1))][VSe.indexOf(s2.substring(1,3))] + s2.substring(3,s2.length)).replace(/̄̆/g,"");
      }
      else if (VSe.includes(s2.charAt(1))){
      return (s1.substring(0,s1.length - 1) + BlendChart[VIn.indexOf(s1.charAt(s1.length - 1))][VSe.indexOf(s2.charAt(1))] + s2.substring(2,s2.length)).replace(/̄̆/g,"");
      }
      else {
        return (s1.replace(/'/g,"i") + s2.substring(1,s2.length)).replace(/̄̆/g,"");
      }
    }
    else if (VSe.includes(s2.charAt(1))) {
      return (s1 + s2.substring(1,s2.length)).replace(/̄̆/g,"");
    }
    else return (s1 + "i" + s2.substring(1,s2.length)).replace(/̄̆/g,"");
  }
  else {return (s1.replace(/'/g,"i")+s2).replace(/̄̆/g,"")}
}

//INPUT FIELDS (AND TABLE) TAKE FROM HTML

R = document.getElementById("R");
PR = document.getElementById("PR");
SR = document.getElementById("SR");
t = document.getElementById("table");

// const aspects = ["Simple", "Perfect"];
// const voices = ["Active", "Passive"];
// const moods = ["Indicative","Subjunctive"];
// const tenses = ["Present", "Past", "Future"];

//Root heads definition

RootHead = document.createElement("tr");
RootHead.innerHTML = "<td colspan=9 style=\"font-weight : bold;\">Base root forms</td>";

PRootHead = document.createElement("tr");
PRootHead.innerHTML = "<td colspan=9 style=\"font-weight : bold;\">Perfect root forms</td>";

SRootHead = document.createElement("tr");
SRootHead.innerHTML = "<td colspan=9 style=\"font-weight : bold;\">Supine root forms</td>";

t.appendChild(RootHead);

//creating all conjugated-verb cells (only ind and subj)

let T = [];
for (i=0;i<20*6;i++){
  T.push(document.createElement("td"));
}

//creating imperative cells

Imperatives = [
  [null,"-e",null,null,"-ite",null],
  [null,"-itō","-itō",null,"-itōte","-untō"],
  [null,"-ere",null,null,"-iminī",null],
  [null,"-itor","-itor",null,null,"-untor"],
];

ImpRows = []
ImpCells = []
for (i=0;i<4*6;i++){
  ImpCells.push(document.createElement("td"))
  if (i%6 == 0){
    ImpRows.push(document.createElement("tr"))
  }
  if (i%12 == 0){
    ImpRows[Math.floor(i/6)].innerHTML += "<td class = 'lefthead' rowspan=2 height='100px'>Imperative</td><td style='font-weight : bold;'>PRESENT</td>"
  }
  if (i%12 == 6){
    ImpRows[Math.floor(i/6)].innerHTML += "<td style='font-weight : bold;'>FUTURE</td>"
  }
  ImpRows[Math.floor(i/6)].appendChild(ImpCells[i])
}

//creating participle cells

Participles = [
  [R,"-ēns"],[R,"-ē̆ndus"], 
  [SR,"tūrus"],[SR,"tus"],
]

ParRows = []
ParCells = []
for (i=0;i<4;i++){
  ParRows.push(document.createElement("tr"));
  ParCells.push(document.createElement("td"))
}
ParRows[0].innerHTML = "<td colspan=2 class='tense'>PRESENT Participle</td>" 
ParRows[1].innerHTML = "<td colspan=2 class='tense'>FUTURE Participle</td>" 
ParRows[2].innerHTML = "<td rowspan=3  class='lefthead'>Active</td><td class='tense' colspan=2>FUTURE Participle</td>"
ParRows[3].innerHTML = "<td rowspan=9 class='lefthead'>Passive</td><td colspan=2 class='tense'>PAST Participle</td>"
for (i=0;i<4;i++){
  ParCells[i].colSpan = 6;
  ParRows[i].appendChild(ParCells[i])
}

//creating infinitive cells

function InfSuffix(){
  if (['a','e','i'].includes(R.value.charAt(R.value.length - 1))) {
    return "-erī"
  }
  else return "-ī"
}

InfRows = []
InfCells = []
for (i=0;i<8;i++){
  InfRows.push(document.createElement("tr"))
  InfCells.push(document.createElement("td"))
  InfCells[i].colSpan = 6;
}

InfRows[0].innerHTML = "<td class='tense' colspan=2>PRESENT\nInfinitive</td>"
InfRows[1].innerHTML = "<td class='tense' colspan=2>PRESENT\nInfinitive</td>"
InfRows[2].innerHTML = "<td class='lefthead' rowspan=2>Infinitive</td><td class='tense'>FUTURE</td>"
InfRows[7].innerHTML = "<td class='tense'>PERFECT POTENTIAL</td>"
InfRows[3].innerHTML = "<td class='lefthead' rowspan=3>Infinitive</td><td class='tense'>FUTURE</td>"
InfRows[5].innerHTML = "<td class='tense'>PERFECT</td>"
InfRows[6].innerHTML = "<td class='tense'>FUTURE\nPERFECT</td>"
InfRows[4].innerHTML = "<td class='tense' colspan=2>PERFECT\nInfinitive</td>"

for (i=0;i<8;i++){
  InfRows[i].appendChild(InfCells[i])
}

//creating other cells

Rows = []
for (i=0;i<20;i++){
  Rows.push(document.createElement("tr"))
  if ([0,10].includes(i)){
    active = document.createElement("td");
    active.rowSpan = (i<10)*3 + 6;
    active.classList.add("lefthead");
    active.innerHTML = "Active";
    Rows[i].appendChild(active)
  }
  if (i==5){
    passive = document.createElement("td");
    passive.rowSpan = 9;
    passive.classList.add("lefthead");
    passive.innerHTML = "Passive";
    Rows[i].appendChild(passive)
  }
  if ([0,5,10,15].includes(i)){
    indicative = document.createElement("td");
    indicative.rowSpan = 3;
    indicative.classList.add("lefthead");
    indicative.innerHTML = "Indicative";
    Rows[i].appendChild(indicative)
  }
  if ([3,8,13,18].includes(i)){
    subjunctive = document.createElement("td");
    subjunctive.rowSpan = 2;
    subjunctive.classList.add("lefthead");
    subjunctive.innerHTML = "Subjunctive";
    Rows[i].appendChild(subjunctive)
  }
  if ([0,3,5,8].includes(i)){
    present = document.createElement("td");
    present.classList.add("tense");
    present.innerHTML = "PRESENT";
    Rows[i].appendChild(present);
  }
  if ([2,4,7,9].includes(i)){
    imperfect = document.createElement("td");
    imperfect.classList.add("tense");
    imperfect.innerHTML = "IMPERFECT";
    Rows[i].appendChild(imperfect);
  }
  if ([1,6].includes(i)){
    future = document.createElement("td");
    future.classList.add("tense");
    future.innerHTML = "FUTURE";
    Rows[i].appendChild(future);
  }
  if ([10,13,15,18].includes(i)){
    perfect = document.createElement("td");
    perfect.classList.add("tense");
    perfect.innerHTML = "PERFECT";
    Rows[i].appendChild(perfect);
  }
  if ([12,14,17,19].includes(i)){
    pqperfect = document.createElement("td");
    pqperfect.classList.add("tense");
    pqperfect.innerHTML = "PLUSQUAM-\n-PERFECT";
    Rows[i].appendChild(pqperfect);
  }
  if ([11,16].includes(i)){
    future = document.createElement("td");
    future.classList.add("tense");
    future.innerHTML = "FUTURE\nPERFECT";
    Rows[i].appendChild(future);
  }
  for (j=0;j<6;j++){
    Rows[i].appendChild(T[6*i + j])
  }
}

//appending all cells to HTML table

for (i=0;i<20;i++){
  t.appendChild(Rows[i])
  if (i==4){
    t.appendChild(ImpRows[0])
    t.appendChild(ImpRows[1])
    t.appendChild(ParRows[0])
    t.appendChild(InfRows[0])
  }
  if (i==9){
    t.appendChild(ImpRows[2])
    t.appendChild(ImpRows[3])
    t.appendChild(ParRows[1])
    t.appendChild(InfRows[1])
    t.appendChild(PRootHead);
  }
  if (i==14){
    t.appendChild(InfRows[4])
    t.appendChild(SRootHead);
    t.appendChild(ParRows[2]);
    t.appendChild(InfRows[2]);
    t.appendChild(InfRows[7]);
    t.appendChild(ParRows[3]);
  }
  if (i==19){
    t.appendChild(InfRows[3]);
    t.appendChild(InfRows[5]);
    t.appendChild(InfRows[6]);
  }
}

//personal endings

function personal(i,B,A){ 
  if(A){
    if (i == 0){
      if (B){return "-ō"}
      else return "-m"
    }
    
    else return ["-is","-t","-imus","-itis","-unt"][i-1]
    
  }
  else {
    if (i == 0){
      if (B){return "-or"}
      else return "-r"
    }
    else return ["-eris","-itur","-imur","-iminī","-untur"][i-1]

  }
}

const Ppers = ["-ī","-istī","-it","-imus","-istis","-ērunt"]
const MidP = ["","-er","-era","-eri","-isse"]

//what to do upon clicking button (cells have their insides replaced with appropriate verb forms)

function conj(){
  for (i=0;i<10*6;i++){
    MidS = ["","e","-ēba","-a","-ere"];
    if (['a','e'].includes(R.value.charAt(R.value.length - 1))){
      MidS[1] = "-eb"
      p = personal(i%6,[0,1].includes(Math.floor(i/6)%5),(i<5*6))
    }
    else {
      p = personal(i%6,[0].includes(Math.floor(i/6)%5),(i<5*6))
      if (i==6) {
      MidS[1] = "a";
      }
    }
    
    T[i].innerHTML = blend(
      R.value,
      blend(
        MidS[Math.floor(i/6)%5],
        p
      )
    );
    if (i<6){
      ImpCells[0*6+i].innerHTML = blend(R.value,Imperatives[0][i])
      ImpCells[1*6+i].innerHTML = blend(R.value,Imperatives[1][i])
      ImpCells[2*6+i].innerHTML = blend(R.value,Imperatives[2][i])
      ImpCells[3*6+i].innerHTML = blend(R.value,Imperatives[3][i])
    }
    if (i<4){
      ParCells[i].innerHTML = blend(Participles[i][0].value,Participles[i][1]);
    }
  }
  for (i=10*6;i<15*6;i++){
    if (i<11*6){
      p = Ppers[i%6]
    }
    else {
      p = personal(i%6,Math.floor(i/6)%5 == 1,true)
    }
    if ([71,83].includes(i)){
      p = "-nt"
    }
    T[i].innerHTML = blend(
      PR.value,
      blend(
        MidP[Math.floor(i/6)%5],
        p
      )
    );
  }
  for (i=0;i<6;i++){
    T[15*6 + i].innerHTML = ParCells[3].innerHTML + ses[i]
    T[16*6 + i].innerHTML = ParCells[3].innerHTML + blend(" er",personal(i,true,true))
    T[17*6+i].innerHTML = ParCells[3].innerHTML + blend(" era",personal(i,false,true))
    T[18*6+i].innerHTML = ParCells[3].innerHTML + blend(" si",personal(i,false,true).replace(/u/g,"")) + blend("/sie",personal(i,false,true))
    T[19*6+i].innerHTML = ParCells[3].innerHTML + blend(" esse",personal(i,false,true))
  }
  InfCells[0].innerHTML = blend(R.value,"-ere")
  InfCells[1].innerHTML = blend(R.value,InfSuffix())
  InfCells[2].innerHTML = ParCells[2].innerHTML + " esse"
  InfCells[7].innerHTML = ParCells[2].innerHTML + " fuisse"
  InfCells[3].innerHTML = ParCells[3].innerHTML + " īrī"
  InfCells[5].innerHTML = ParCells[3].innerHTML + " esse"
  InfCells[6].innerHTML = ParCells[3].innerHTML + " fore"
  InfCells[4].innerHTML = blend(PR.value,"-isse")
}

const rand = Math.floor(5*Math.random())
if (Math.floor(2*Math.random())){
  oneverb = "scīv"
}
else {
  oneverb = "sci"
}

const verbs = [
  ["ama","amāv","amā"],
  ["habe","habu","habi"],
  ["disc","didic","disci"],
  ["cap'","cēp","cap"],
  ["sci",oneverb,"scī"]
]

R.value = verbs[rand][0]
PR.value = verbs[rand][1]
SR.value = verbs[rand][2]

conj()
