function setup() {
  createCanvas(windowWidth, windowHeight);
}

s = 75;

function draw() {
  background(0);
  for (x = 0; x < width; x += s) {
    for (y = 0; y < height; y += s) {
      fill(310*x/width, 127, 255);
      push();
      translate(x, y);
      rotate(frameCount / 150);
      star(0, 0, 15, 50, 5);
      // star(x + s*2, y + s*2, 15, 50, 5);
      pop();
    }
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
