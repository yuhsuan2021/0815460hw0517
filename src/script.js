var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")


canvas.width= 400
canvas.height= 400

var time=0

function draw(){
  
  time++
  ctx.clearRect(0,0,400,400)
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //萬華茶室本體
  ctx.fillStyle ="#cd5c5c"
  ctx.fillRect(50,100,300,200)
  
  //secondfloorwindows
  ctx.fillStyle ="#a0522d"
  ctx.fillRect(75,125,100,50)
  
  ctx.fillStyle="#a0522d"
  ctx.fillRect(225,125,100,50)
  
  //firstfloorarch
  ctx.beginPath()
  ctx.moveTo(75,300)
  ctx.arc(125,300,50,Math.PI*2,Math.PI,true)
  ctx.arc(275,300,50,Math.PI*2,Math.PI,true)
  
  ctx.fillStyle="#ffd700"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //茶室招牌
  ctx.fillRect(350,100-(time%3),50,100)
  ctx.fillStyle="#ff4500"
  ctx.strokeRect(350,100,50,100)
  //救護車
  ctx.fillStyle="white"
  let carx =time%440-125
  ctx.fillRect(carx,290,125,75)
  ctx.strokeRect(carx,290,125,75)
  ctx.fillStyle="red"
  ctx.fillRect(carx+70,300,10,50)
  ctx.fillStyle="red"
  ctx.fillRect(carx+50,320,50,10)
  //輪子
  ctx.beginPath()
  ctx.arc(carx+10,365,10,0,Math.PI*2)
 ctx.arc(carx+120,365,10,0,Math.PI*2)
  
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
  
  //確認有抓到滑鼠位置
  ctx.beginPath()
ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
  ctx.fillStyle="black"
  ctx.fill()
}
//draw()

//設定連續繪製
setInterval(draw,30)//不斷畫圖，一秒三十次

//定義變數為物件，紀錄滑鼠位置
var mouse={
  x:0,
  y:0
}

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt)
{
  mouse.x=evt.offsetX //相對於畫布上距離
  mouse.y=evt.offsetY
})
