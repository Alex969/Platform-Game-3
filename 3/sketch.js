/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var jewel = {x_pos: 100, y_pos: 100, size: 50, isFound: false};
var canyon = {x_pos: 300, width: 100};
var isLeft = false
var isRight = false
var isJumping = false
var isFalling = false

function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
}

function draw()
{
    background(100,155,255); //fill the sky blue

    noStroke();
    fill(0,155,0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground


    //draw the canyon
    fill(50,50,0);
    rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);


    //the game character
    if(isLeft && isJumping)
    {
        // add your jumping-left code
        fill(0);
    rect(238,495,14,20);
    fill(139,0,0);
    rect(240.5,515,9,15);
    fill(255,0,0);
    quad(252.5,515,245,515,234,525,239,530);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(244,490,20,25);
    ellipse(235,514,4,4);
    fill(255);
    ellipse(240,490,5,7);
    fill(0);
    ellipse(240,490,2,2);
    fill(255,182,193);
    ellipse(245,480,9,4);
    fill(255);
    ellipse(240,499,10,6);


    }
    else if(isRight && isJumping)
    {
        // add your jumping-right code
        fill(0);
    rect(40,495,14,20);
    fill(139,0,0);
    rect(42.5,515,10.5,15);
    fill(255,0,0);
    quad(42.5,515,52.5,515,57,520,54,530);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(47,490,20,25);
    ellipse(58,514,4,4);
    fill(255);
    ellipse(50,490,5,7);
    fill(0);
    ellipse(50,490,2,2);
    fill(255,182,193);
    ellipse(47,480,9,4);
    fill(255);
    ellipse(50,499,10,6)

    }
    else if(isLeft)
    {
        // add your walking left code
        fill(0);
    rect(39,295,14,20);
    fill(255,0,0);
    rect(40.5,315,10.5,15);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(44,290,20,25);
    ellipse(35,314,4,4);
    fill(255);
    ellipse(40,290,5,7);
    fill(0);
    ellipse(40,290,2,2);
    fill(255,182,193);
    ellipse(45,280,9,4);
    fill(255);
    ellipse(40,299,10,6)

    }
    else if(isRight)
    {
        // add your walking right code
        fill(0);
    rect(240,295,14,20);
    fill(255,0,0);
    rect(242.5,315,10.5,15);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(247,290,20,25);
    ellipse(258,314,4,4);
    fill(255);
    ellipse(250,290,5,7);
    fill(0);
    ellipse(250,290,2,2);
    fill(255,182,193);
    ellipse(247,280,9,4);
    fill(255);
    ellipse(250,299,10,6)


    }
    else if(isJumping || isFalling)
    {
        // add your jumping facing forwards code
        fill(0);
    rect(230,95,30,20);
    fill(255,0,0);
    rect(234.5,115,10.5,15);
    rect(244.5,110,10.5,15);
    fill(255);
    ellipse(238,125,1,3);
    stroke(255);
    line(233.5,100,233.5,115);
    line(255,100,255,115);
    line(244,115,244,130),
    fill(210,180,140);
    noStroke();
    ellipse(245,90,25,30);
    ellipse(231.5,118,4,4)
    ellipse(258,118,4,4);
    fill(255);
    ellipse(240,90,5,7);
    ellipse(250,90,5,7);
    fill(0);
    ellipse(250,90,2,2);
    ellipse(240,90,2,2);
    fill(255,182,193);
    ellipse(245,77,9,4);
    fill(255);
    ellipse(245,100,15,9)

    }
    else
    {
        // add your standing front facing code
        fill(0);
    rect(30,95,30,20);
    fill(255,0,0);
    rect(34.5,115,20.5,15);
    fill(255);
    ellipse(38,125,1,3);
    stroke(255);
    line(33.5,100,33.5,115);
    line(55,100,55,115);
    line(44,115,44,130),
    fill(210,180,140);
    noStroke();
    ellipse(45,90,25,30);
    ellipse(31.5,118,4,4)
    ellipse(58,118,4,4);
    fill(255);
    ellipse(40,90,5,7);
    ellipse(50,90,5,7);
    fill(0);
    ellipse(50,90,2,2);
    ellipse(40,90,2,2);
    fill(255,182,193);
    ellipse(45,77,9,4);
    fill(255);
    ellipse(45,100,15,9)

    }
}


function keyPressed()
{
    // if statements to control the animation of the character when
    // keys are pressed.
    if (keyCode == LEFT_ARROW) {
    isLeft = true;
  } else if (keyCode == RIGHT_ARROW) {
    isRight = true;
  }
}

function keyReleased()
{
    // if statements to control the animation of the character when
    // keys are released.
     if (keyCode == LEFT_ARROW) {
    isLeft = false;
  } else if (keyCode == RIGHT_ARROW) {
    isRight = false;
  }
}

