// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk

let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
  dvd = loadImage('imgs/headingsmall.png');
}

//    dvd = loadImage('imgs/Artboard%20210-215.png');
//    dvd = loadImage('imgs/sphinx%20high%20def%20coloured%20210-193.png');

//function mousePressed() {
//  dvd.resize(219, 187);
//}


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 5;
  yspeed = 5;
  pickColor();
}

function pickColor() {
  r = random(0, 256);
  g = random(0, 256);
  b = random(0, 256);
}

function draw() {
  background(0,0,0);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  tint(r, g, b);
  image(dvd, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}


//let a;
//let c;
//
//let aspeed;
//let cspeed;
//
//let sphinx;
//
//let r, g, b;
//
//function preload() {
//  sphinx = loadImage('imgs/Artboard%20210-215.png');
//}
//
////    dvd = loadImage('imgs/Artboard%20210-215.png');
////    dvd = loadImage('imgs/sphinx%20high%20def%20coloured%20210-193.png');
//
//function mousePressed() {
//  sphinx.resize(210, 215);
//}
//
//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  a = random(width);
//  c = random(height);
//  aspeed = 5;
//  cspeed = 5;
//  pickColor();
//}
//
//function pickColor() {
//  r = random(0, 256);
//  g = random(0, 256);
//  b = random(0, 256);
//}
//
//function draw() {
//  background(0);
//  // rect(x, y, 80, 60);
//  // Draw the DVD logo
//  tint(r, g, b);
//  image(sphinx, a, c);
//
//  a = a + aspeed;
//  c = c + cspeed;
//
//  if (a + sphinx.width >= width) {
//    aspeed = -aspeed;
//    a = width - sphinx.width;
//    pickColor();
//  } else if (a <= 0) {
//    aspeed = -aspeed;
//    a = 0;
//    pickColor();
//  }
//
//  if (c + sphinx.height >= height) {
//    cspeed = -cspeed;
//    c = height - sphinx.height;
//    pickColor();
//  } else if (c <= 0) {
//    cspeed = -cspeed;
//    c = 0;
//    pickColor();
//  }
//}

//window.onscroll = function() {myFunction()};
//
//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
//
//function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    navbar.classList.add("sticky")
//  } else {
//    navbar.classList.remove("sticky");
//  }
//}