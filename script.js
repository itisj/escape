var vx = 12;
var vy = 8;

function hitLR(el, bounding) {
    if (el.offsetLeft <= 0 && vx < 0) {
        console.log('LEFT');
        vx = -1 * vx;
    }
    if ((el.offsetLeft + el.offsetWidth) >= bounding.offsetWidth) {
        console.log('RIGHT');
        vx = -1 * vx;
    }
    if (el.offsetTop <= 0 && vy < 0) {
        console.log('TOP');
        vy = -1 * vy;
    }
    if ((el.offsetTop + el.offsetHeight) >= bounding.offsetHeight) {
        console.log('BOTTOM');
        vy = -1 * vy;
    }
}

function mover(el, bounding) {
    hitLR(el, bounding);
    el.style.left = el.offsetLeft + vx + 'px';
    el.style.top = el.offsetTop + vy + 'px';
    setTimeout(function() {
        mover(el, bounding);
    }, 50);
}

setTimeout(function() {
    mover($('.bouncer')[0], $('.bouncyHouse')[0]);
}, 50);




//// Bouncing DVD Logo
//// Daniel Shiffman
//// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
//// https://youtu.be/0j86zuqqTlQ
//// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk
//
//let x;
//let y;
//
//let xspeed;
//let yspeed;
//
//let dvd;
//
//let r, g, b;
//
//function preload() {
//  dvd = loadImage('imgs/happy%20219-187.png');
//}
//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  x = random(width);
//  y = random(height);
//  xspeed = 10;
//  yspeed = 10;
//  pickColor();
//}
//
//function pickColor() {
//  r = random(100, 256);
//  g = random(100, 256);
//  b = random(100, 256);
//}
//
//function draw() {
//  background(0);
//  // rect(x, y, 80, 60);
//  // Draw the DVD logo
//  tint(r, g, b);
//  image(dvd, x, y);
//
//  x = x + xspeed;
//  y = y + yspeed;
//
//  if (x + dvd.width >= width) {
//    xspeed = -xspeed;
//    x = width - dvd.width;
//    pickColor();
//  } else if (x <= 0) {
//    xspeed = -xspeed;
//    x = 0;
//    pickColor();
//  }
//
//  if (y + dvd.height >= height) {
//    yspeed = -yspeed;
//    y = height - dvd.height;
//    pickColor();
//  } else if (y <= 0) {
//    yspeed = -yspeed;
//    y = 0;
//    pickColor();
//  }
//}