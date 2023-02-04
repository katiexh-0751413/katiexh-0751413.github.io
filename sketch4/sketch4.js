let max_distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  max_distance = dist(0, 0, 710, 400);
}

function draw() {
  background(0);
  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 66;
      fill(310*i/width, 127, 255);
      // ellipse(i, j, size, size);
      heart(i, j, size);
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