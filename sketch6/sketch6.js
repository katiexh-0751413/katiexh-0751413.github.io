let osc, playing, freq, amp;
var offset = 0;
var strum = 0.5;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() {
  background(220);
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text('tap to play', 20, 20);
  text('freq: ' + freq, 20, 40);
  text('amp: ' + amp, 20, 60);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    sineWave();
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}

function sineWave() {
  beginShape();
  vertex(0, height);
  for (var x = 0; x < width; x++) {
    // map x between 0 and width to 0 and Two Pi
    // var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // var y = map(sin(angle), -strum, strum, 150, 250);
    var y = map(sin(angle), -strum, strum, 200*amp, 200);
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  // the offset (how wide the sine wave is) depends on freq
  offset += freq*0.001;
  // offset += amp*0.75;
}