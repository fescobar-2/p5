let stars = [];
let pages = [
  "Once upon a time in a galaxy far far away lived two little robots, they had been hanging out for a long time, everything was going ok, until .",
  "One day, a young rabbit came to the owl with a problem. 'I want to be the fastest animal in the forest,' said the rabbit. The owl thought for a moment and then replied, 'To be the fastest, you must practice every day and never give up.'"
];
let currentPage = 0;
let charIndex = 0;
let displayText = "";
let timer = 0;
let interval = 50; // Interval in milliseconds for each letter
let showStory = true;
let img1, img2;
let dialog = [
  { speaker: 1, text: "Hello there!" },
  { speaker: 2, text: "Hi! How are you?" },
  { speaker: 1, text: "I'm good, thanks. What about you?" },
  { speaker: 2, text: "Doing great!" }
];
let currentDialog = 0;

// assets
let backgroundImage;
let cloud;
let trail;
let train;
let yellowRobot;
let music;

//bg code
let bgSpeedX = 0.1;
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
let trainPosX = 700;
let trainPosY = 50;

let x = 0;
let y = 0;
let dim = 80.0;

// Load dialog bubble images
let dialogBubbles = [];

//Rocket Variables
let angle = 3.14 / 2; // Start at PI/2 for quarter-circle motion
let radius = 100; // Radius of the circular path
let cx, cy; // Center of the circular path
let rocketX, rocketY; // Rocket's position
let descent = false; // Flag for starting descent
let descentSpeed = 2; // Speed of descent
let rocketImageYellow; // Rocket image
let newImageYellow; // New image when the yellow rocket lands
// Variables for the second rocket (red rocket)
let rocketX2, rocketY2, angle2 = 3.14 / 2, descent2 = false;
const cx2 = 300; // Initial x position for the second rocket
const cy2 = 100; // Initial y position for the second rocket

let redRocketLanded = false;
let yellowRocketLanded = false;
let redRocketLaunch = false;
let yellowRocketLaunch = false;
let redRobotX = 300;
let robotHappy = false;

// Elliptical path parameters for the second rocket
const ellipseRadiusX = 150;
const ellipseRadiusY = 75;
let rocketImageRed; // Rocket image
let newImageRed; // New image when the red rocket lands

function setup() {
  createCanvas(1640, 760);
  pixelDensity(1)
  textSize(24);
  trailPosX2 = width;
  bgPosX2 = width;
  textSize(32);
  fill(0);
  timer = millis(); // Initialize the timer
  //rocket landing
  cx = width / 2;
  cy = height / 2 - radius;
  // music.loop();
  // createCanvas(windowWidth, windowHeight);
  // textAlign(CENTER, CENTER);
  // textAlign(LEFT, TOP);
}

// carregando assets
function preload() {
  // backgroundImage = loadImage("./assets/background-og.jpg");
  font = loadFont('./fonts/PressStart2P-Regular.ttf'); // Ensure the path matches your TTF file location
  floor = loadImage("./assets/capa-01.png");
  grassmountains = loadImage("./assets/capa-02.png");
  sky = loadImage("./assets/capa-03.png")
  cloud = loadImage("./assets/cloud.jpg");
  // trail = loadImage("./assets/sorry.png");
  redRobot = loadImage("./assets/robot-red.png")
  train = loadImage("./assets/train-og.png");
  yellowRobot = loadImage("./assets/robot-yellow.png");
  // music = loadSound("assets/pixel-song.wav");  
  img1 = loadImage("./assets/train-og.png");; // replace with your image path
  img2 = loadImage("./assets/robot-yellow.png");; // replace with your image path
  pinkShip = loadImage("./assets/space-ship-pink.png");
  yellowShip = loadImage("./assets/space-ship-yellow.png");
  dialogLeft = loadImage("./assets/pixel-speech-left.png");
  dialogRight = loadImage("./assets/pixel-speech-right.png");
  dialogBubbles.push(loadImage("./assets/pixel-speech-left.png")); // Assuming this is the dialog bubble for the red robot
  dialogBubbles.push(loadImage("./assets/pixel-speech-right.png")); // Assuming this is the dialog bubble for the yellow robot
  rocketImageYellow = loadImage('./assets/space-ship-yellow.png');
  rocketImageRed = loadImage('./assets/space-ship-pink.png');
  newImageYellow = loadImage('./assets/robot-yellow.png'); // Load the new image for the yellow rocket
  newImageRed = loadImage('./assets/robot-red.png'); // Load the new image for the red rocket
  robotRedHappy = loadImage('./assets/robot-red-happy.png'); // Load the new image for the red rocket

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

function drawBG() {
  // Clear the background
  background(255);

  // Draw the images
  image(sky, bgPosX1, 0, width, height * 1.5);
  image(sky, bgPosX2, 0, width, height * 1.5);
  image(grassmountains, bgPosX1, 0, width, height);
  image(grassmountains, bgPosX2, 0, width, height);
  drawTrain();
  image(floor, -15, 0, width * 1.1, height);
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


// train functions
function drawTrain() {
  x = x + 0.8;
  if (x > width + dim) {
    x = -dim;
  }
  // translate(x, height / 2 - dim / 2);
  image(train, trainPosX, trainPosY, 150, 90);
  // image(yellowRobot, 650, 600, 180, 160)
  // image(dialogRight, 600, 550, 290, 120);
}

function moveTrain() {
  trainPosY = 50 + (random(-10, 10));
  if (trainPosY >= 50) {
    trainPosY = 52;
  } if (trainPosY <= 50) {
    trainPosY = 50;
  }
  trainPosX -= 1.6
}

// music functions
function playMusic() {
  loop(music);
}

function drawRedRobot() {
  // image(redRobot, 200, 600, 120, 150);
  // image(dialogLeft, 250, 525, 190, 120);
  // image(pinkShip, 400, 150, 160, 120)
  // image(yellowShip, 1000, 200, 150, 120)
}

function drawStoryBox() {
  drawBG();
  moveBG();
  // Draw the story box
  let boxX = width / 4;
  let boxY = height / 4;
  let boxWidth = width / 2;
  let boxHeight = height / 2;
  fill(200);
  rect(boxX, boxY, boxWidth, boxHeight, 10); // Rounded corners
  fill(0);

  // Update the text to display letter by letter
  if (millis() - timer > interval && charIndex < pages[currentPage].length) {
    displayText += pages[currentPage][charIndex];
    charIndex++;
    timer = millis();
  }
  textFont(font);
  // Display the text inside the box
  let textX = boxX + 20;
  let textY = boxY + 20;
  let textBoxWidth = boxWidth - 40;
  let textBoxHeight = boxHeight - 40;
  text(displayText, textX, textY, textBoxWidth, textBoxHeight);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW || keyCode === 32) { // Right arrow or space key
    nextPage();
  }
}

function mousePressed() {
  nextPage();
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    charIndex = 0;
    displayText = "";
    timer = millis(); // Reset the timer for the new page
  } else {
    showStory = false; // Hide the story box and start the animation
  }
}

function drawRocketLandingYellow() {
  if (!yellowRocketLanded) {

    if (!descent) {
      // Circular motion for quarter-circle (from PI/2 to PI)
      rocketX = cx + radius * cos(angle);
      rocketY = cy + radius * sin(angle);
      angle += 0.02; // Increment the angle to move the rocket

      // Check if we should start descending (angle has rotated through quarter circle)
      if (angle >= PI) {
        descent = true;
        // Set the rocket to the vertical position at the end of the circular path
        rocketX = cx + radius * cos(PI);
        rocketY = cy + radius * sin(PI);
      }
    } else {
      // Descent
      rocketY += descentSpeed;

      // Ensure it doesn't go off the screen
      if (rocketY > 600) {
        rocketY = 600;
        yellowRocketLanded = true;
      }
    }

    // Draw the rocket with rotation
    push();
    translate(rocketX, rocketY);
    if (!descent) {
      rotate(angle - HALF_PI); // Rotate the rocket as it moves in the quarter-circle path
    } else {
      rotate(HALF_PI); // Rotate the image to be nose-up for descent
    }
    imageMode(CENTER);
    image(rocketImageYellow, 0, 0, 200, 100); // Adjust size to fit your rocket image
    pop();
  } else {
    drawRocketLaunchYellow();
  }
}

function drawRocketLaunchYellow() {
  // image(yellowShip, rocketX, rocketY, 50, 50);
  image(newImageYellow, rocketX + 75, 560, 200, 150);
  drawRotatedImageYellow(rocketImageYellow, rocketX, rocketY, 200, 100); // Example usage
  rocketY -= descentSpeed;
}

function drawRotatedImageYellow(img, x, y, w, h) {
  push();
  translate(rocketX, rocketY); // Move the origin to the center of the image
  rotate(HALF_PI); // Rotate 90 degrees to the right (clockwise)
  imageMode(CENTER);
  image(img, 0, 0, w, h); // Draw the image centered at the new origin
  pop();
}

function drawRocketLandingRed() {
  if (!redRocketLanded) {
    if (!descent2) {
      // Elliptical motion for the second rocket
      rocketX2 = cx2 + ellipseRadiusX * cos(angle2);
      rocketY2 = cy2 + ellipseRadiusY * sin(angle2);
      angle2 += 0.02; // Increment the angle to move the rocket

      // Check if we should start descending (angle has rotated through quarter ellipse)
      if (angle2 >= PI) {
        descent2 = true;
        // Set the rocket to the vertical position at the end of the elliptical path
        rocketX2 = cx2 + ellipseRadiusX * cos(PI);
        rocketY2 = cy2 + ellipseRadiusY * sin(PI);
      }
    } else {
      // Descent
      rocketY2 += descentSpeed;

      // Ensure it doesn't go off the screen or below y = 700
      if (rocketY2 > 600) {
        rocketY2 = 600;
        redRocketLanded = true; // Mark the red rocket as landed


      }
    }
  }


  // Draw the second rocket with rotation
  push();
  translate(rocketX2, rocketY2);
  if (!descent2) {
    rotate(angle2 - HALF_PI); // Rotate the rocket as it moves in the elliptical path
  } else {
    rotate(HALF_PI); // Rotate the image to be nose-up for descent
  }
  imageMode(CENTER);
  image(rocketImageRed, 0, 0, 200, 130); // Adjust size to fit your red rocket image
  pop();

  // Display the new image next to the existing rocket image
  if (redRocketLanded) {
    drawRocketLaunchRed();
    redRocketLaunch = true;
  }
}

function drawRotatedImageRed(img, x, y, w, h) {
  push();
  translate(rocketX2, rocketY2); // Move the origin to the center of the image
  rotate(HALF_PI); // Rotate 90 degrees to the right (clockwise)
  imageMode(CENTER);
  image(img, 0, 0, w, h); // Draw the image centered at the new origin
  pop();
}

function drawRocketLaunchRed() {
  if(!robotHappy){
  image(newImageRed, redRobotX, 550, 200, 150);
  drawRotatedImageRed(rocketImageRed, redRobotX, rocketY2, 200, 130); // Example usage
  setTimeout(() => {
    rocketY2 -= descentSpeed;
    redRobotX += descentSpeed

  }, 1000)
  if (redRobotX > 600 ) {
    redRobotX = 600;
    // robotHappy = true;
    // if(redRobotX = 600){
    //   drawHappyRobot();
    // }
  }}
}
function drawHappyRobot(){
  image(robotRedHappy, redRobotX, 550, 200, 150);
}

function draw() {
  if (showStory) {
    drawStoryBox();
  } else {
    // startAnimation();
    drawBG();
    moveBG();
    // drawRedRobot();
    moveTrain();
    drawRocketLandingYellow();
    drawRocketLandingRed();
    // drawTrail();
    // moveTrail();
    // drawFont();
    // playMusic();
    // drawAxes();
  }
}