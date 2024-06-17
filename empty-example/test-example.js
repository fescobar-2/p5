let angle = 3.14 / 2; // Start at PI/2 for quarter-circle motion
let radius = 100; // Radius of the circular path
let cx, cy; // Center of the circular path
let rocketX, rocketY; // Rocket's position
let descent = false; // Flag for starting descent
let descentSpeed = 2; // Speed of descent
let rocketImage; // Rocket image

// // function preload() {
// //   // Load your rocket image here
// //   rocketImage = loadImage('./assets/train-og.png');
// // }

// // function setup() {
// //   createCanvas(600, 400);
// //   cx = width / 2;
// //   cy = height / 2 - radius;
// // }

// // function draw() {
// //   background(0);

// //   if (!descent) {
// //     // Circular motion for quarter-circle (from PI/2 to PI)
// //     rocketX = cx + radius * cos(angle);
// //     rocketY = cy + radius * sin(angle);
// //     angle += 0.02; // Increment the angle to move the rocket

// //     // Check if we should start descending (angle has rotated through quarter circle)
// //     if (angle >= PI) {
// //       descent = true;
// //       // Set the rocket to the vertical position at the end of the circular path
// //       rocketX = cx + radius * cos(PI);
// //       rocketY = cy + radius * sin(PI);
// //     }
// //   } else {
// //     // Descent
// //     rocketY += descentSpeed;

// //     // Ensure it doesn't go off the screen
// //     if (rocketY > height) {
// //       rocketY = height;
// //     }
// //   }

// //   // Draw the rocket with rotation
// //   push();
// //   translate(rocketX, rocketY);
// //   if (!descent) {
// //     rotate(angle - HALF_PI); // Rotate the rocket as it moves in the quarter-circle path
// //   } else {
// //     rotate(HALF_PI); // Rotate the image to be nose-up for descent
// //   }
// //   imageMode(CENTER);
// //   image(rocketImage, 0, 0, 40, 20); // Adjust size to fit your rocket image
// //   pop();

// //   // Optionally draw the path for visual reference
// //   stroke(100);
// //   noFill();
// //   ellipse(cx, cy, radius * 2);
// // }


// // let images = [];
// // let dialogs = [
// //   "Hello!",
// //   "Hi there!",
// //   "How are you?",
// //   "I'm good, thanks!",
// //   "What about you?",
// //   "I'm doing well too!"
// // ];
// // let currentImage = 0;
// // let alpha = 0;
// // let fadeIn = true;
// // let nextDialogTime = 0;

// // function preload() {
// //   for (let i = 0; i < 6; i++) {
// //     images[i] = loadImage(`./assets/image${i + 1}.png`); // Ensure your images are named image1.jpg, image2.jpg, etc.
// //   }
// // }

// // function setup() {
// //   createCanvas(800, 400);
// //   textSize(24);
// //   textAlign(CENTER, CENTER);
// //   nextDialogTime = millis() + 5000; // Show next dialog after 5 seconds
// // }

// // function draw() {
// //   background(0);

// //   if (fadeIn) {
// //     alpha += 5;
// //     if (alpha >= 255) {
// //       alpha = 255;
// //       fadeIn = false;
// //     }
// //   } else {
// //     alpha -= 5;
// //     if (alpha <= 0) {
// //       alpha = 0;
// //       fadeIn = true;
// //       currentImage++;
// //       if (currentImage >= images.length) {
// //         currentImage = 0;
// //       }
// //       nextDialogTime = millis() + 5000; // Reset the dialog timer
// //     }
// //   }

// //   // Draw the current image with alpha transparency
// //   tint(255, alpha);
// //   image(images[currentImage], width / 2 - images[currentImage].width / 2, height / 2 - images[currentImage].height / 2);

// //   // Draw the dialog
// //   if (millis() < nextDialogTime) {
// //     fill(255);
// //     text(dialogs[currentImage], width / 2, height - 50);
// //   }
// // }

// let font;

// // function preload() {
// //   font = loadFont('./fonts/PressStart2P-Regular.ttf'); // Ensure the path matches your TTF file location
// // }


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
let yellowRobot;
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
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  // textAlign(CENTER, CENTER);
  trailPosX2 = width;
  bgPosX2 = width;
  // music.loop();
}


// carregando assets
function preload() {
  // backgroundImage = loadImage("./assets/background-og.jpg");
  floor = loadImage("./assets/capa-01.png");
  grassmountains = loadImage("./assets/capa-02.png");
  sky = loadImage("./assets/capa-03.png")
  cloud = loadImage("./assets/cloud.jpg");
  // trail = loadImage("./assets/sorry.png");
  redRobot = loadImage("./assets/robot-red.png")
  train = loadImage("./assets/train-og.png");
  yellowRobot = loadImage("./assets/robot-yellow.png");
  // music = loadSound("assets/music.mp3");
  font = loadFont('./fonts/PressStart2P-Regular.ttf'); // Ensure the path matches your TTF file location
  img1 = loadImage("./assets/train-og.png");; // replace with your image path
  img2 = loadImage("./assets/robot-yellow.png");; // replace with your image path
  pinkShip = loadImage("./assets/space-ship-pink.png");
  yellowShip = loadImage("./assets/space-ship-yellow.png");
  dialogLeft = loadImage("./assets/pixel-speech-left.png");
  dialogRight = loadImage("./assets/pixel-speech-right.png");
}


function drawAxes() {
  stroke(0);
  line(0, height / 2, width, height / 2); // x-axis
  line(width / 2, 0, width / 2, height); // y-axis

  // Draw ticks and labels on x-axis
  for (let i = 0; i <= width; i += 50) {
    line(i, height / 2 - 5, i, height / 2 + 5);
    text(i, i + 2, height / 2 + 15);
  }

  // Draw ticks and labels on y-axis
  for (let i = 0; i <= height; i += 50) {
    line(width / 2 - 5, i, width / 2 + 5, i);
    text(i, width / 2 + 8, i + 3);
  }
}

function drawFont() {
  // background(0);
  // fill(255);
  text('Pixel Font!', 268, 393);
  text('Pixel Font!', 615, 410);
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



function drawBG() {
  // Clear the background
  background(255);

  // Draw the images
  image(sky, bgPosX1, 0, width, height*1.5);
  image(sky, bgPosX2, 0, width, height*1.5);
  image(grassmountains, bgPosX1, 0, width, height);
  image(grassmountains, bgPosX2, 0, width, height);
  image(floor, -15, 0, width, height);
}

function moveBG() {
  bgPosX1 += 1;
  bgPosX2 += 1;

  // Reset positions when they go off-screen
  if (bgPosX1 >= width) {
    bgPosX1 = bgPosX2 - width;
  }
  if (bgPosX2 >= width) {
    bgPosX2 = bgPosX1 - width;
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
  image(yellowRobot, 650, 425, 180, 160)
  image(dialogRight, 600, 375, 150, 80);
}

function moveTrain() {
  trainPosY = 10 + (random(-10, 10));
  if (trainPosY >= 10) {
    trainPosY = 11;
  } if (trainPosY <= 10) {
    trainPosY = 10;
  }
}


// music functions
function playMusic() {
  loop(music);
}

function drawRedRobot(){
  image(redRobot, 200, 425, 120, 150);
  image(dialogLeft, 250, 360, 150, 80);
  image(pinkShip, 400, 150, 160, 120)
  image(yellowShip, 650, 200 , 150, 120)
}

function draw() {
  drawBG();
  moveBG();
  drawTrain();
  drawRedRobot();
  // drawDialog();
  moveTrain();
  // drawTrail();
  // moveTrail();
  drawFont();
  // playMusic();
  drawAxes();
}