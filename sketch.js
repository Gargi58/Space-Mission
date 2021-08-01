var bg  , Sc , Sc , Ss  ,logo;
var Iss , spaceCraft;
var hasDocked  = false;
function preload()
{
  bg = loadImage("bg1.jpg");
  Ss  = loadImage("iss1.png");
  Sc1 = loadImage("spacecraft1.png");
  Sc2 = loadImage("spacecraft2.png");
  Sc3 = loadImage("spacecraft3.png");
  Sc4 = loadImage("spacecraft4.png");
  Logo = loadImage("logo.png");
  Logo2 = loadImage("arrow.png");
  sound = loadSound("sound.mp3");
  sound2 = loadSound("sound2.mp3")
}
function setup() 
{
  createCanvas(displayWidth , displayHeight-100);
  sound.loop();
  Iss = createSprite(400, 300, 50, 50);
  Iss.scale = 0.8;
  Iss.addImage(Ss);
  Iss.setCollider("circle", 16, -23, 8);
  //Iss.debug = true;

  spaceCraft = createSprite(displayWidth/1.4, 600, 50, 50);
  spaceCraft.scale = 0.2;
  spaceCraft.addImage(Sc1);
  spaceCraft.depth = Iss.depth -1;
  //spaceCraft.debug = true;

  logo = createSprite(displayWidth/1.4,displayHeight/3.8);
  logo.addImage(Logo);
  logo.scale = 0.08;
  logo.visible = false;

  logo2 = createSprite(displayWidth/3.84,displayHeight/3.8);
  logo2.addImage(Logo2);
  logo2.scale = 0.08;
}

function draw() 
{
  background(bg); 
  drawSprites();
  if(hasDocked === false)
  {   
    spaceCraft.x = spaceCraft.x  +random(-1,1);
    if(keyDown("UP_ARROW"))
    {
      spaceCraft.setCollider("rectangle", 0, -300, 100 , 40);
      spaceCraft.addImage(Sc2);
      spaceCraft.y = spaceCraft.y  -5;
    }
    if(keyDown("DOWN_ARROW"))
    {
      spaceCraft.setCollider("rectangle", 0, -180, 100 , 40);
      spaceCraft.addImage(Sc1);
      spaceCraft.y = spaceCraft.y  +5;
    }
    if(keyDown("RIGHT_ARROW"))
    {
      spaceCraft.setCollider("rectangle", 0, -300, 100 , 40);
      spaceCraft.addImage(Sc4);
      spaceCraft.x = spaceCraft.x  +5;
    }
    if(keyDown("LEFT_ARROW"))
    {
      spaceCraft.setCollider("rectangle", 0, -300, 100 , 40);
      spaceCraft.addImage(Sc3);
      spaceCraft.x = spaceCraft.x  -5;
    }
    if(spaceCraft.isTouching(Iss))
   {
    sound2.play();
    hasDocked = true;
   }
   }
  if(hasDocked === true)
  {
    sound.stop();
    spaceCraft.addImage(Sc1);
    spaceCraft.x = 415;
    spaceCraft.y = 320;
    logo.visible = true;
    logo2.visible = false;
    fill(0,0,246);
    stroke(84,234,211);
    strokeWeight(5);
    textSize(50);
    text("DOCKED SUCCESSFULLY!!" , displayWidth/2 , displayHeight/2);
  }
  console.log(mouseX , mouseY);
}