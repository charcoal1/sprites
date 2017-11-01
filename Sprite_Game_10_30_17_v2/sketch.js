var s = 1;


function setup() {
   createCanvas(700, 700);
   background(200);
}

function preload() {
   // animations
   boyt = loadAnimation("libraries/images/sprites/boyt_01.png", "libraries/images/sprites/boyt_11.png");
   gorl = loadAnimation("libraries/images/sprites/gorl_01.png", "libraries/images/sprites/gorl_06.png");
   cowboy = loadAnimation("libraries/images/sprites/cowboy_01.png", "libraries/images/sprites/cowboy_06.png");
}

function draw() {
   if (keyIsPressed) {
      fill(mouseX, mouseY, 100);
      noStroke();
      rect(0, 0, 710, 710);
   }

   //background(175);
   if (s == 1) {
      spriteOne();
   } else if (s == 2) {
      spriteTwo();
   } else if (s == 3) {
      spriteThree();
   } else {
      spriteOne();
   }


   function spriteOne() {
      fill(mouseX - 200, mouseY - 200, 255)
         //rect(mouseX, mouseY, 100, 100);
      animation(cowboy, mouseX, mouseY);
   }

   function spriteTwo() {
      fill(mouseX, mouseY, 255)
         //triangle(mouseX, mouseY, mouseX + 40, mouseY + 40, mouseX + 40, mouseY - 40);
      animation(gorl, mouseX, mouseY);
   }

   function spriteThree() {
      fill(mouseX, mouseY, 255)
         //ellipse(mouseX, mouseY, 100, 100);
      animation(boyt, mouseX, mouseY);
   }

   noFill();
   stroke(255, 200, 0);
   strokeWeight(3);
   rect(1, 1, 697, 697);


   /*
   if (mouseIsPressed) {
      print("it's clicked :)");
      s = s + 1;
      if (s > 3) {
         s = 1;
      }
   }
   */


}

function mousePressed() {
   print("it's clicked :)");
   s = s + 1;
   if (s > 3) {
      s = 1;
   }
}