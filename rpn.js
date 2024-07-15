let div1 = document.getElementById("div1")
let l = []
l.push(document.getElementById("l1"))
let h = []
h.push(document.getElementById("hr1"))
let expr = document.getElementById("expr")
let EXP = document.getElementById("EXP")
let lineCount = 1
let expression = ""

function clearnums(){
  nextline()
  while (lineCount > 1) {
    add()
  }
  expression = ""
  EXP.disabled = false
}

function giveexpr(){
  expr.innerText = expression
}

function backspace(){
  let a = l.at(-1)
  let b = a.innerHTML
  let c = a.innerHTML.substr(0, b.length-13) + a.innerHTML.substr(b.length-12, b.length-1)
  expression = expression.slice(0,expression.length-2)
  a.innerHTML = c
  console.log(b)
  EXP.disabled = true
}

function nextline(){
  l.push(document.createElement('h1'))
  div1.appendChild(l.at(-1))
  l.at(-1).innerHTML = "&nbsp;&nbsp;"
  lineCount ++
  h.push(document.createElement('hr'))
  div1.appendChild(h.at(-1))
  expression += " "
}

function writenum(num){
  let a = l.at(-1)
  a.innerHTML = a.innerHTML.replace("&nbsp;&nbsp;",num + "&nbsp;&nbsp;")
  expression += String(num)
}

function add(){
  let b = l.at(-1)
  let a = l.at(-2)
  let a1 = a.innerHTML.replace("&nbsp;&nbsp;","")
  let b1 = b.innerHTML.replace("&nbsp;&nbsp;","")
  console.log("a1: " + a1)
  console.log("b1: " + b1)
  let c = parseFloat(a1) + parseFloat(b1)
  console.log(c)
  a.innerHTML = c + "&nbsp;&nbsp;"
  div1.removeChild(h.at(-1))
  h.splice(-1,1)
  div1.removeChild(l.at(-1))
  l.splice(-1,1)
  lineCount --
  a.innerHTML = a.innerHTML.replace("NaN","")
  expression += " + "
}

function subt(){
  let b = l.at(-1)
  let a = l.at(-2)
  let b1 = b.innerHTML.replace("&nbsp;&nbsp;","")
  let a1 = a.innerHTML.replace("&nbsp;&nbsp;","")
  console.log("a1: " + a1)
  console.log("b1: " + b1)
  let c = parseFloat(a1) - parseFloat(b1)
  console.log(c)
  div1.removeChild(h.at(-1))
  h.splice(-1,1)
  div1.removeChild(l.at(-1))
  l.splice(-1,1)
  a.innerHTML = c + "&nbsp;&nbsp;"
  lineCount --
  a.innerHTML = a.innerHTML.replace("NaN","")
  expression += " - "
}

function prod(){
  let b = l.at(-1)
  let a = l.at(-2)
  let b1 = b.innerHTML.replace("&nbsp;&nbsp;","")
  let a1 = a.innerHTML.replace("&nbsp;&nbsp;","")
  console.log("a1: " + a1)
  console.log("b1: " + b1)
  let c = parseFloat(a1) * parseFloat(b1)
  console.log(c)
  div1.removeChild(h.at(-1))
  h.splice(-1,1)
  div1.removeChild(l.at(-1))
  l.splice(-1,1)
  a.innerHTML = c + "&nbsp;&nbsp;"
  lineCount --
  a.innerHTML = a.innerHTML.replace("NaN","")
  expression += " * "
}

function div(){
  let b = l.at(-1)
  let a = l.at(-2)
  let b1 = b.innerHTML.replace("&nbsp;&nbsp;","")
  let a1 = a.innerHTML.replace("&nbsp;&nbsp;","")
  console.log("a1: " + a1)
  console.log("b1: " + b1)
  let c = parseFloat(a1) / parseFloat(b1)
  console.log(c)
  div1.removeChild(h.at(-1))
  h.splice(-1,1)
  div1.removeChild(l.at(-1))
  l.splice(-1,1)
  a.innerHTML = c + "&nbsp;&nbsp;"
  lineCount --
  a.innerHTML = a.innerHTML.replace("NaN","")
  expression += " / "
}

function power(){
  let b = l.at(-1)
  let a = l.at(-2)
  let b1 = b.innerHTML.replace("&nbsp;&nbsp;","")
  let a1 = a.innerHTML.replace("&nbsp;&nbsp;","")
  console.log("a1: " + a1)
  console.log("b1: " + b1)
  let c = parseFloat(a1) ** parseFloat(b1)
  console.log(c)
  div1.removeChild(h.at(-1))
  h.splice(-1,1)
  div1.removeChild(l.at(-1))
  l.splice(-1,1)
  a.innerHTML = c + "&nbsp;&nbsp;"
  lineCount --
  a.innerHTML = a.innerHTML.replace("NaN","")
  expression += " ^ "
}