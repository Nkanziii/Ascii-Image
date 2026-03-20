let myImage;
let size;
const txt = ["وَعَاشِرُوهُنَّ", "بِالْمَعْرُوفِ"];

function preload() {
  myImage = loadImage("woman.jpg");
}

function setup() {
  createCanvas(500, 800);
  myImage.resize(55, 0);
  size = width / myImage.width;
  noLoop();
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);

  myImage.loadPixels();

  for (let i = 0; i < myImage.width; i++) {
    for (let j = 0; j < myImage.height; j++) {
      let pixelsIndex = (i + j * myImage.width) * 4;
      let r = myImage.pixels[pixelsIndex + 0];
      let g = myImage.pixels[pixelsIndex + 1];
      let b = myImage.pixels[pixelsIndex + 2];

      let bright = (r + g + b)/3;
      let tIndex = floor(map(bright, 0, 255, 0, txt.length));

      let x = i * size + size / 2;
      let y = j * size + size / 2;
      let t = txt[tIndex]; //picking the arabic writing

      textSize(size * 0.4);
      fill(bright * 3);
      text(txt[tIndex], x, y);
    }
  }
}
