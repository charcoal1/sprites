var s = 1; //state of sprite
var bg = 200; // default background
var brushes = []; //from other code


function setup() {
   createCanvas(700, 700);
   background(200);
   frameRate(35);
}

function preload() {
   // animations
   boyt = loadAnimation("libraries/images/sprites/boyt_01.png", "libraries/images/sprites/boyt_11.png");
   gorl = loadAnimation("libraries/images/sprites/gorl_01.png", "libraries/images/sprites/gorl_06.png");
   cowboy = loadAnimation("libraries/images/sprites/cowboy_01.png", "libraries/images/sprites/cowboy_06.png");
}

function draw() {
   background(bg);

   for (var i = 0; i < brushes.length; i++) {
      brushes[i].display();
   }


   var mX = mouseX;
   var mY = mouseY;
   if (keyIsPressed) {
      if (keyCode == ENTER || keyCode == RETURN) { // change BG when Enter is pressed
         bg = color(mouseX, mouseY, 100);
         noStroke();
         rect(0, 0, 710, 710);
      }
      if (key === 's') {
         saveCanvas('Drawing', 'png'); // file name  - how to get it to increase in value
         // 'Yes'+1, '.png'


      }
   }

   /*
      //state of sprite
      if (s == 1) {
         spriteOne();
      }
      else if (s == 2) {
         spriteTwo();
      } else if (s == 3) {
         spriteThree();
      } else if (s == 4) {
         spriteFour();
      } else if (s == 5) {
         spriteFive();
      } else {
         spriteOne();
      }
      


      function spriteOne() { //boyt
         //animation(boyt, mouseX, mouseY);
      }

      function spriteTwo() { //square
         fill(0, random(30, 40), random(150, 200), 30);
         noStroke();
         rect(mouseX, mouseY, 30, 30);
      }

      function spriteThree() { //gorl
         animation(gorl, mouseX, mouseY);
      }

      function spriteFour() { //circle
         fill(random(200, 255), random(100), 0, 10);
         noStroke();
         ellipse(mouseX, mouseY, 75);
      }

      function spriteFive() { //cowboy
         animation(cowboy, mouseX, mouseY);
      }
      */


   noFill(); // color frame
   stroke(255, 200, 0);
   strokeWeight(3);
   rect(1, 1, 697, 697);

   append(brushes, new Brush(mouseX, mouseY));

} // end of draw

function Brush(x, y) {
   this.x = x;
   this.y = y;
   this.display = function() {
      animation(boyt, this.x, this.y);
   }
}

function mousePressed() {
   append(brushes, new Brush(mouseX, mouseY));
}

/*
function mousePressed() { // when clicked
   print("it's clicked :)");
   s = s + 1;
   if (s > 5) {
      s = 1;
   }
}
*/