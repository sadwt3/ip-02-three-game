// 作品二：交互动态（Road iguanadon）
// 必须有 draw() 循环；包含多种交互：
// 1. 小球随时间自动运动，碰到画布边缘反弹；
// 2. 鼠标横向移动（mouseX）控制小球颜色；
// 3. 半透明背景保留运动轨迹，鼠标位置绘制跟随方块。

let ballX;      // 小球横坐标
let ballY;      // 小球纵坐标
let speedX;     // 横向速度
let speedY;     // 纵向速度

function setup() {
  createCanvas(380, 570);
  noStroke();
  // 初始位置随机
  ballX = random(width);
  ballY = random(height);
  speedX = random(-2, 2);
  speedY = random(-2, 2);
}

function draw() {
  // 半透明背景，保留运动轨迹
  background(20, 20, 40, 18);

  // if 边界判断：碰到画布边缘反弹
  if (ballX < 0 || ballX > width) {
    speedX = -speedX;
  }
  if (ballY < 0 || ballY > height) {
    speedY = -speedY;
  }

  // 更新坐标，实现运动
  ballX = ballX + speedX;
  ballY = ballY + speedY;

  // mouseX 控制颜色
  let redVal = map(mouseX, 0, width, 30, 220);
  fill(redVal, 100, 180);

  // random 随机尺寸
  let size = random(15, 45);
  ellipse(ballX, ballY, size, size);

  // 额外：鼠标位置绘制跟随方块
  fill(255, 180, 80, 120);
  rectMode(CENTER);
  rect(mouseX, mouseY, 30, 30);
}
