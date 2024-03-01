link = document.getElementById("link")
function S(box,password,goto){
  INPUT = document.getElementById(box);
  if (INPUT.value == password) {
    link.href = goto;
    link.innerHTML = "Continue. / Kontynuuj.";
  }
}
