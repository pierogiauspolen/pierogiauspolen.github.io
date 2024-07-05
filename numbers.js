let B = [25,50,75,100]
//let S = [1,2,3,4,5,6,7,8,9,10]

function boolean(x){
  if (x in [1,1.0,true,'1','true','on']){
    return true
  }
  if (x in [0,0.0,false,'','0','false','off']){
    return false
  }
}

function randsubset(L){
  let A = []
  let j = 0
  for ( var i = 0; i<L.length; i++) {
    let b = (Math.random()>0.5)
//    console.log(b)
    if (b) {
      A[j] = L[i]
      j++
    }
  }
  return A
}

function randsubsetlen(L,len){
  A = []
  while (A.length != len) {
//    console.log(A)
    A = randsubset(L)
  }
//  console.log(A)
  return A
}

let bx = [
  document.getElementById('big1'),
  document.getElementById('big2'),
  document.getElementById('big3'),
  document.getElementById('big4')]

let sx = [
  document.getElementById("num1"),
  document.getElementById("num2"),
  document.getElementById("num3"),
  document.getElementById("num4"),
  document.getElementById("num5"),
  document.getElementById("num6")
]

let tx = [
  document.getElementById("rand1"),
  document.getElementById("rand2"),
  document.getElementById("rand3")
]

var aob

function generate(){
  for (var i=0;i<4;i++){
    if (bx[i].checked){
      aob = parseInt(bx[i].value)
      break
    }
  }
  console.log(aob)
  let A = randsubsetlen(B,aob)
  console.log(A)
  for (var i=0;i<aob;i++){
    sx[i].innerHTML = A[i]
  }
  COUNT = [0,0,0,0,0,0,0,0,0,0]
  for (var i = aob; i<6; i++){
    let x = Math.floor(Math.random()*10)
    if (COUNT[x] < 2){
      sx[i].innerText = x+1
      COUNT[x]++
    }
    else {
      i--
    }
  }
  tx[0].innerText = Math.floor(Math.random()*100000) %9 + 1
  tx[1].innerText = Math.floor(Math.random()*100000) % 10
  tx[2].innerText = Math.floor(Math.random()*100000) % 10
}