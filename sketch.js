let img1, img2;
let dialog = [
  { speaker: 1, text: "Hello there!" },
  { speaker: 2, text: "Hi! How are you?" },
  { speaker: 1, text: "I'm good, thanks. What about you?" },
  { speaker: 2, text: "Doing great!" }
];
let currentDialog = 0;

// function preload() {
//   img1 = loadImage("./assets/train-og.png");; // replace with your image path
//   img2 = loadImage("./assets/robot-yellow.png");; // replace with your image path
// }

// function setup() {
//   createCanvas(800, 400);
//   textSize(24);
// }

// assets
let backgroundImage;
let cloud;
let trail;
let train;
let trainShadow;
let music;

//bg code
let bgSpeedX = 0.3;
let bgPosX1 = 0;
let bgPosX2;

// trail code
let trailSpeedX = 20;
let trailPosX1 = 30;
let trailPosX2;

// cloud code
let cloudSpeedX = 0.3;
let cloudPosX = 0;

// train code
let trainPosX = 500;
let trainPosY = 200;

let x = 0;
let y = 0;
let dim = 80.0;

function setup() {
  createCanvas(626 * 1.5, 417 * 1.5);
  textSize(24);

  trailPosX2 = width;
  bgPosX2 = width;
  // music.loop();
}


// carregando assets
function preload() {
  backgroundImage = loadImage("./assets/background-og.jpg");
  cloud = loadImage("./assets/cloud.jpg");
  trail = loadImage("./assets/sorry.png");
  train = loadImage("./assets/train-og.png");
  trainShadow = loadImage("./assets/robot-yellow.png");
  // music = loadSound("assets/music.mp3");

  img1 = loadImage("./assets/train-og.png");; // replace with your image path
  img2 = loadImage("./assets/robot-yellow.png");; // replace with your image path
}

function drawDialog() {
  // background(255);
  // image(img1, 50, 100, 200, 200);
  // image(img2, 550, 100, 200, 200);

  if (dialog[currentDialog].speaker === 1) {
    fill(0);
    rect(35, 50, 220, 50, 10);
    fill(255);
    text(dialog[currentDialog].text, 35, 85);
  } else {
    fill(0);
    rect(520, 150, 220, 50, 10);
    fill(255);
    text(dialog[currentDialog].text, 520, 180);
  }
}

function mousePressed() {
  currentDialog = (currentDialog + 1) % dialog.length;
}

//background functions
function drawBG() {
  image(backgroundImage, bgPosX1, 0, width, height);
  image(backgroundImage, bgPosX2, 0, width, height);
}

function moveBG() {
  bgPosX1 += 1;
  bgPosX2 += 1;

  if (bgPosX1 >= width) {
    bgPosX1 = -width + 0.1;
  } if (bgPosX2 >= width) {
    bgPosX2 = -width + 0.1;
  }
}



// trail functions
function drawTrail() {
  image(trail, trailPosX1, 50, width / 4, height / 8);
  image(trail, trailPosX2, 50, width / 4, height / 8);
}

function moveTrail() {
  trailPosX1 += trailSpeedX;
  trailPosX2 += trailSpeedX;

  if (trailPosX1 >= width) {
    trailPosX1 = -width + 10;
  } if (trailPosX2 >= width) {
    trailPosX2 = -width + 10;
  }
}



// cloud functions
function drawCloud() {
  image(cloud, cloudPosX, 194, 456, 136);
}

function moveCloud() {
  cloudPosX += cloudSpeedX;

  if (cloudPosX >= width) {
    cloudPosX = 0 - 456;
  }
}



// train functions
function drawTrain() {
  x = x + 0.8;
  if (x > width + dim) {
    x = -dim;
  }
  image(train, trainPosX, trainPosY, 150, 90);
  // translate(x, height / 2 - dim / 2);
  image(trainShadow, 0, 120, 180, 160)
}

function moveTrain() {
  trainPosY = 10 + (random(-1, 1));
  if (trainPosY >= 1) {
    trainPosY = 10;
  } if (trainPosY <= 0) {
    trainPosY = 10;
  }
}



// music functions
function playMusic() {
  loop(music);
}




function draw() {
  drawBG();
  moveBG();
  drawTrain();
  drawDialog();
  moveTrain();
  // drawTrail();
  // moveTrail();
  // playMusic();
}