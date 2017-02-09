x=null
y=null
oldX=null
oldY=null
continueDraw=false
color ='blue'
canvas = document.getElementById('myCanvas')
ctx = canvas.getContext('2d')
canvasCounter=1


canvas.addEventListener('mousemove', function(event) {
  getMousePos(canvas, event)
})

function getMousePos(canvas, event) {
    oldX=x
    oldY=y
    var rect = canvas.getBoundingClientRect()
    x=event.clientX - rect.left
    y=event.clientY - rect.top
    if (continueDraw===true){
      drawLittle()
      draw()
    }
}

canvas.addEventListener('mousedown', function() { continueDraw=true })
document.addEventListener('mouseup', function() { continueDraw=false })

function draw(){
  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(oldX,oldY)
  ctx.lineWidth=5
  ctx.strokeStyle = color
  ctx.stroke()
  ctx.closePath()
}

document.addEventListener('keydown', clearScreen)

function clearScreen(e){
  console.log(e.which)
  if (e.which===67){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctxL.clearRect(0, 0, canvas.width/5, canvas.height/5)
    continueDraw = false
  }
  else if (e.which===83){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    addNewCanvas()
    continueDraw = false
  }
}

function addNewCanvas(){
  document.getElementById('myLittleCanvas').id = `littleCanvas${canvasCounter++}`
  var canv=document.createElement("canvas");
  canv.setAttribute("id", "myLittleCanvas");
  canv.setAttribute("width", "160");
  canv.setAttribute("height", "160");
  canv.setAttribute("style", "border:5px solid #000000");
  canv.setAttribute("draggable", "true");
  document.getElementById("div").appendChild(canv);
  canvasLittle = document.getElementById('myLittleCanvas')
  ctxL = canvasLittle.getContext('2d')
}
document.addEventListener('drag', function(event) {
  draggedcanvas=event.target
})

canvas.addEventListener("dragover", function(event) {
    event.preventDefault();
});

canvas.addEventListener('drop', switchCanvas)

function switchCanvas(event){
  console.log(draggedcanvas)
  debugger
}
