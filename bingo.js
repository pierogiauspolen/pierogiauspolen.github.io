const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server/*, {
  path: "/multiplayer/"
}*/);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'bingo.html'));
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

nBeenAlr = [];

function CTDWN(){
  const t = 5; //HOW LONG TO COUNT
  function step(){
    r = Math.floor(75*Math.random())+1
    while (IN(r,nBeenAlr)){
      r = Math.floor(75*Math.random())+1
    }
    nBeenAlr.push(r)
    console.log(nBeenAlr)
    io.emit('NUMBER',nBeenAlr)
    clearInterval(ch);
    if (nBeenAlr.length<75){CTDWN();}
    else {io.emit('DONE');}
  }
  console.log("finished defining step")
  ch = setInterval(step,t*1000);
}

function IN(r,A){
  for (var i=0;i<A.length;i++){
    if (A[i]==r) {return true;}
  }
  return false;
}

io.on('connection',(socket)=>{
  socket.on("BINGO", (Rstr)=>{
    console.log("RECEIVED BINGO SIGNAL")
    io.emit("BINGO",Rstr);
  })
})

console.log("starting calling CTDWN")
CTDWN()

//io.on('connection', (socket) => {})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});