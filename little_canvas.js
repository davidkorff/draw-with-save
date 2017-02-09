canvasLittle = document.getElementById('myLittleCanvas')
ctxL = canvasLittle.getContext('2d')

function drawLittle(){
  ctxL.beginPath()
  ctxL.moveTo(x/5,y/5)
  ctxL.lineTo(oldX/5,oldY/5)
  ctxL.lineWidth=1
  ctxL.strokeStyle = color
  ctxL.stroke()
  ctxL.closePath()
}
