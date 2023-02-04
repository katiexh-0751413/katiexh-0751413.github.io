function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  smooth();
  noStroke();
  noLoop();
}

s = 15;

function draw() {
  background(0);
  for (x = 0; x < width; x += s) {
    for (y = 0; y < height; y += s) {
      fill(310*x/width, 127, 255);
      heart(x+s/2, y+s/2, s/2);
    }
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}