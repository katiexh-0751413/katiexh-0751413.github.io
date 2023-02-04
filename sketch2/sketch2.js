function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(20);
  frameRate(2);
  colorMode(HSB);
}

s = 100;

function draw() {
  for (let i = 0; i < width; i+=s) {
    for (let j = 0; j < height; j+=s) {
      let r = random(255);
      let g = random(255);
      let b = random(255);
      fill(r, g, b);
      rect(i, j, s - 40, s - 40);
    }
  }
}