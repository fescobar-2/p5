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
let trailPosX1 = 0;
let trailPosX2;

// cloud code
let cloudSpeedX = 0.3;
let cloudPosX = 0;

// train code
let trainPosX = 500;
let trainPosY = 280;

let x = 0;
let y = 0;
let dim = 80.0;

function setup() {
  createCanvas(626*1.5, 417*1.5);
  trailPosX2 = width;
  bgPosX2 = width;
  // music.loop();
}



// carregando assets
function preload() {
  backgroundImage = loadImage("./assets/background-og.jpg");
  cloud = loadImage("./assets/cloud.jpg");
  trail = loadImage("./assets/train-og.png");
  train = loadImage("./assets/train-og.png");
  trainShadow = loadImage("./assets/robot-yellow.png");
  // music = loadSound("assets/music.mp3");
}



//background functions
function drawBG() {
  image(backgroundImage, bgPosX1, 0, width, height);
  image(backgroundImage, bgPosX2, 0, width, height);
}

function moveBG() {
  bgPosX1 += 1;
  bgPosX2 += 1;
  
  if (bgPosX1 >= width){
    bgPosX1 = -width + 0.1;
  } if (bgPosX2 >= width){
    bgPosX2 = -width + 0.1;
  }
}



// trail functions
function drawTrail() {
  image(trail, trailPosX1, 0, width, height);
  image(trail, trailPosX2, 0, width, height);
}

function moveTrail() {
  trailPosX1 += trailSpeedX;
  trailPosX2 += trailSpeedX;
  
  if (trailPosX1 >= width){
    trailPosX1 = -width + 10;
  } if (trailPosX2 >= width){
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
  translate(x, height / 2 - dim / 2);
  image(trainShadow, 0, 120, 180, 160)
}

function moveTrain() {
  trainPosY = 10+ (random(-1, 1));
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
  // moveTrain();
  // drawTrail();
  // moveTrail();
  // playMusic();
}