/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var jewel = {x_pos: 200, y_pos: 100, size: 50, isFound: false};
var canyon = {x_pos: 300, width: 100};

var isJumping = false;
var isLeft = false;
var isRight = false;
var isFalling = false;


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
    rect(gameChar_x - 7,gameChar_y - 42,14,20);
    fill(139,0,0);
    rect(gameChar_x - 4.5,gameChar_y - 22,9,15);
    fill(255,0,0);
    quad(gameChar_x +7.5,gameChar_y - 22,gameChar_x,515,gameChar_x - 11,gameChar_y - 12,gameChar_x - 6,gameChar_y - 7);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x - 1,gameChar_y - 47,20,25);
    ellipse(gameChar_x - 10,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 38,10,6);

    }
    else if(isRight && isJumping)
    {
        // add your jumping-right code
        fill(0);
    rect(gameChar_x - 5,gameChar_y - 42,14,20);
    fill(139,0,0);
    rect(gameChar_x - 2.5,gameChar_y - 22,10.5,15);
    fill(255,0,0);
    quad(gameChar_x - 2.5,gameChar_y - 22,gameChar_x + 8,gameChar_y - 22,gameChar_x +8,gameChar_y - 17,gameChar_x + 10,gameChar_y - 7);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x + 2,gameChar_y - 47,20,25);
    ellipse(gameChar_x + 13,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x + 2,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 38,10,6)

    }
    else if(isLeft)
    {
        // add your walking left code
        fill(0);
    rect(gameChar_x - 6,gameChar_y - 42,14,20);
    fill(255,0,0);
    rect(gameChar_x - 4.5,gameChar_y - 22,10.5,15);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x - 1,gameChar_y - 47,20,25);
    ellipse(gameChar_x - 10,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 38,10,6)

    }
    else if(isRight)
    {
        // add your walking right code
          fill(0);
    rect(gameChar_x - 5,gameChar_y - 42,14,20);
    fill(255,0,0);
    rect(gameChar_x - 2.5,gameChar_y - 22,10.5,15);
    fill(255);
    stroke(255);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x + 2,gameChar_y - 47,20,25);
    ellipse(gameChar_x + 13,gameChar_y - 23,4,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x + 2,gameChar_y - 57,9,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 38,10,6)

    }
    else if(isJumping || isFalling)
    {
        // add your jumping facing forwards code
    fill(0);
    rect(gameChar_x - 15,gameChar_y - 42,30,20);
    fill(255,0,0);
    rect(gameChar_x - 10.5,gameChar_y - 22,10.5,15);
    rect(gameChar_x - 0.5,gameChar_y - 27,10.5,15);
    fill(255);
    ellipse(gameChar_x - 7,gameChar_y - 12,1,3);
    fill(210,180,140);
    noStroke();
    ellipse(gameChar_x,gameChar_y - 47,25,30);
    ellipse(gameChar_x + 13.5,gameChar_y - 19,4,4)
    ellipse(gameChar_x - 13,gameChar_y - 19,4,4);
    fill(255);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(gameChar_x + 10,182,193);
    ellipse(gameChar_x,gameChar_y - 60,9,4);
    fill(255);
    ellipse(gameChar_x,gameChar_y-37,15,9)

    }
    else
    {
        // add your standing front facing code
        fill(0);
     fill(0);
    rect(gameChar_x - 15,gameChar_y - 42,30,20);
    fill(255,0,0);
    rect(gameChar_x - 10.5,gameChar_y - 22,20.5,15);
    fill(255);
    ellipse(gameChar_x - 7,gameChar_y - 12,1,3);
    fill(210,180,140);
    ellipse(gameChar_x,gameChar_y - 47,25,30);
    ellipse(gameChar_x - 13.5,gameChar_y - 19,4,4)
    ellipse(gameChar_x + 13,gameChar_y - 19,4,4);
    fill(255);
    ellipse(gameChar_x - 5,gameChar_y - 47,5,7);
    ellipse(gameChar_x + 5,gameChar_y - 47,5,7);
    fill(0);
    ellipse(gameChar_x + 5,gameChar_y - 47,2,2);
    ellipse(gameChar_x - 5,gameChar_y - 47,2,2);
    fill(255,182,193);
    ellipse(gameChar_x,gameChar_y - 60,9,4);
    fill(255);
    ellipse(gameChar_x,gameChar_y - 37,15,9)
        
     }
    
    
    
    
    //mystery object
    
    if(!jewel.isFound)
    {
        noFill();
        strokeWeight(6);
        stroke(220,185,0);
        ellipse(jewel.x_pos, floorPos_y -20, 40,40);
        fill(255,0,255);
        stroke(255);
        strokeWeight(1);
        quad(
            jewel.x_pos -5,floorPos_y -40,
            jewel.x_pos -10, floorPos_y -55,
            jewel.x_pos + 10, floorPos_y -55,
            jewel.x_pos + 5,floorPos_y -40
        );
        noStroke();
    }
    
    
    
    //character logic
    
    if(isLeft)
    {
        gameChar_x = gameChar_x - 3;
    }
    else if(isRight)
    {
        gameChar_x = gameChar_x + 3;
    }
    
    if(isJumping)
    {
        if(gameChar_y > floorPos_y - 200)
        {
            gameChar_y = gameChar_y - 10;
        }
        else
        {
            isJumping = false;    
        }
    }
    else if(gameChar_y < floorPos_y )
    {
        //falling
        console.log("falling")
        gameChar_y = gameChar_y + 3;
    }

    if(gameChar_x < jewel.x_pos + jewel.size && gameChar_x > jewel.x_pos - jewel.size)
    {
        if(gameChar_y >= floorPos_y)
        {
            console.log("found");
            jewel.isFound = true;
        }
    }
    
    if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width)
    {
        
        if(gameChar_y >= floorPos_y)
        {
            console.log("canyon")
            isFalling = true;
        }
    }
    
    if(isFalling)
    {
        gameChar_y += 15;
    }
    
    
}


function keyPressed()
{
    // if statements to control the animation of the character when
    // keys are pressed.
    
    console.log(key);
    console.log(keyCode);
    
    if(keyCode == 37)
    {
        console.log("left");  
        isLeft = true;
    }
    
    if(keyCode == 39)
    {
        console.log("right");
        isRight = true;
    }
    
    if(key == " " && gameChar_y >= floorPos_y)
    {
        console.log("jump")
        isJumping = true;
    }
    

}

function keyReleased()
{
    // if statements to control the animation of the character when
    // keys are released.
    
    if(keyCode == 37)
    {   
        console.log("release left")
        isLeft = false;
    }
    
    if(keyCode == 39)
    {
        console.log("release right");
        isRight = false;
    }
    
    if(key == " ")
    {
        console.log("release jump")
        isJumping = false;
    }
}
