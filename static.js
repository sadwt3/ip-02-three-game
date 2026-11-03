// 作品一：几何构成（静态）
// 只使用形状、颜色、位置；全部绘制在 setup() 中完成，不写 draw() 循环。
// 双重 for 循环生成 8x8 棋盘式圆点阵列，(x + y) 的奇偶决定黑白交替，
// 用重复与交错形成节奏，画面有明确的视觉秩序。

function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop(); // 静态作品：只绘制一次，不进入动画循环

  // 双重 for 循环批量生成重复元素（不逐个手写）
  for (let col = 0; col < 8; col++) {
    for (let row = 0; row < 8; row++) {
      // (col + row) 为偶数时填白、奇数时填黑，形成棋盘交错
      fill((col + row) % 2 * 255);
      ellipse(col * 50 + 25, row * 50 + 25, 50, 50);
    }
  }
}
