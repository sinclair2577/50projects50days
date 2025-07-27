var canvas = document.getElementById("draw-container");
var pen = canvas.getContext("2d");
const reduce = document.getElementById("reduce");
const lineWidthDiv = document.getElementById("number");
const add = document.getElementById("add");
const color = document.getElementById("color");
const flushBtn = document.querySelector(".close");

let isDrawing = false;
let lineWidth = 10;
let colorChoose = color.value;
let x = 0;
let y = 0;

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  const [x2, y2] = getMousePos(e);
  drawingLine(x, y, x2, y2);
  drawingCircle(x2, y2);

  x = x2;
  y = y2;
});
canvas.addEventListener("mouseup", endDraw);

reduce.addEventListener("click", reduceLineWidth);
add.addEventListener("click", addLineWidth);
color.addEventListener("change", chooseColor);

flushBtn.addEventListener("click", flush);

// 鼠标按下后执行事件
function startDraw(e) {
  isDrawing = true;
  const [x1, y1] = getMousePos(e);
  x = x1;
  y = y1;
}

// 鼠标移动时执行事件（画线）
function drawingLine(x, y, x2, y2) {
  pen.beginPath();
  pen.moveTo(x, y);
  pen.strokeStyle = colorChoose;
  pen.lineWidth = lineWidth * 2;
  pen.lineTo(x2, y2);
  pen.stroke();
}

// 画圆
function drawingCircle(x2, y2) {
  pen.beginPath();
  pen.fillStyle = colorChoose;
  pen.arc(x2, y2, lineWidth, 0, 2 * Math.PI);
  pen.fill();
}

// 鼠标松开后执行事件
function endDraw(e) {
  isDrawing = false;
}

function updateLine() {
  lineWidthDiv.innerText = lineWidth;
}

function reduceLineWidth(e) {
  lineWidth -= 5;

  if (lineWidth < 5) {
    lineWidth = 5;
  }

  updateLine();
}

function addLineWidth(e) {
  lineWidth += 5;

  if (lineWidth > 50) {
    lineWidth = 50;
  }
  updateLine();
}

// 选择绘画笔颜色
function chooseColor(e) {
  colorChoose = e.target.value;
}

// 清除屏幕
function flush(e) {
  pen.clearRect(0, 0, canvas.width, canvas.height);
}

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return [(e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY];
}
