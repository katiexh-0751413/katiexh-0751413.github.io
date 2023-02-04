// A Class to describe a "button"
class Button {
  constructor(x_, y_, r_) {
    // Location and size
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  // Is a point inside the button? (used for mouse rollover, etc.)
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }

  // Show the button (hardcoded colors, could be improved)
  display(mx, my) {
    stroke(0);
    strokeWeight(4);
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

let song;

let playbutton, stopbutton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Load the sound file.
  song = loadSound('samsung.mp3');
}

function draw() {
  // Create a new button
  fill(0, 255, 0);
  playbutton = new Button(275, height / 2, 32);
  playbutton.display(mouseX, mouseY);
  // playbutton = new Button(width / 2, height / 2, 32);

  fill(255, 0, 0);
  stopbutton = new Button(125, height / 2, 32);
  // Show the button
  stopbutton.display(mouseX, mouseY);
}

function mousePressed() {
  // If the user clicks on the button, play the sound!
  if (playbutton.contains(mouseX, mouseY)) {
    song.play();
  } else if (stopbutton.contains(mouseX, mouseY)) {
    song.stop();
  }
}
