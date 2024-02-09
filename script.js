let hitrn=0;
let time=60;
let intID=null;

function start(){
    var cluster="";

    for(var i=1;i<85;i++){
    cluster +=`<div id="bubble">${Math.floor(Math.random()*10)}</div>`;
}
    document.getElementById("downpan") .innerHTML=cluster;
    hitNum();
}


function coundown(){
   if(time>=0){
   intID=setInterval(()=>{
        time--;
        document.getElementById('coundown').textContent=time;
    
    
    if(time===0){
        clearInterval(intID);
            document.getElementById('downpan').textContent="GAME OVER";

    }
   },1000);
   }
}


function hitNum(){
    hitrn= document.getElementById("hitnum").textContent=Math.floor(Math.random()*10);
}

let scoreIs=Number(0);
 function score(){
    document.getElementById("scoreval").textContent=scoreIs+=10;
 }

document.getElementById("downpan").addEventListener("click",function(dets){
   if(Number(dets.target.textContent)=== hitrn ){
    score();
    start();
   }
   else{
    if(Number(dets.target.textContent)!== hitrn){
        clearInterval(intID);
        document.getElementById('coundown').textContent="0";
        document.getElementById('downpan').textContent="GAME OVER";
       }
   }
 })
 

start();
coundown();

