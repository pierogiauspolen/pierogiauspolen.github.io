let canva = document.getElementById('canva')
let ctx=canva.getContext('2d')

canva.width = 500; canva.height = 500;

A0= 0;
mu= 0;
g = 0;
v0= 0;


class Pendulum {
  constructor(A,v){
    this.A = A*Math.PI/180;
    this.v = v*Math.PI/180;
    this.a = -mu*this.v - (g/200)**0.5 * Math.sin(this.A);
  }
  
  draw = function (){
    ctx.beginPath();
    ctx.moveTo(250,250)
    ctx.lineTo(250,500)
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(250,250)
    ctx.lineTo(250+200*Math.sin(this.A),250+200*Math.cos(this.A))
    ctx.arc(250+200*Math.sin(this.A),250+200*Math.cos(this.A),30, -Math.PI/2 - this.A,3*Math.PI/2 - this.A)
    ctx.stroke();
  }
  
  update = function (){
    ctx.clearRect(0,0,500,500)
    this.a = -mu*this.v - g/200 * Math.sin(this.A);
    this.v += this.a;
    this.A += this.v;
    this.draw();
  }
}

window.addEventListener('mousemove',function(){
  A0 = document.getElementById('angle').value
  mu = document.getElementById('airres').value
  v0 = document.getElementById('initv').value
  g = document.getElementById('gravity').value
  document.getElementById('angleval').innerHTML = String(A0) + "&deg;";
  document.getElementById('resval').innerHTML = String(mu);
  document.getElementById('initvval').innerHTML = String(v0);
  document.getElementById('gravval').innerHTML = String(g);
})

function animat(){
  requestAnimationFrame(animat);
  p.update();
  A0 = document.getElementById('angle').value
  mu = document.getElementById('airres').value
  v0 = document.getElementById('initv').value
  g = document.getElementById('gravity').value
  document.getElementById('angleval').innerHTML = String(A0) + "&deg;";
  document.getElementById('resval').innerHTML = String(mu);
  document.getElementById('initvval').innerHTML = String(v0);
  document.getElementById('gravval').innerHTML = String(g);
}

function clic(){
  p = new Pendulum(A0,v0);
  animat()
}