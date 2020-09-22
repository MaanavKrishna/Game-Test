var narrator,enemy1,enemy2,player;
var egglocater,elpart1,elpart2,elpart3;
var part1,part2,part3,part4,part5,part5,part6,part7,part8,part9,part10,part11;
var number=0;
var textdeliver;
var eggimg,elpart1img,elpart2img,elpart3img,egglocaterimg;
var button;

function preload(){
  eggimg=loadImage("Sprites/the-golden-goose.png");
  elpart1img=loadImage("Sprites/motor.png");
  elpart2img=loadImage("Sprites/system.png");
  elpart3img=loadImage("Sprites/chip.png");
  egglocaterimg=loadImage("Sprites/gps.png")
}
function setup(){
 createCanvas(windowWidth, windowHeight);
 narrator=createSprite(windowWidth-300,windowHeight-300,10,10);

}

function draw(){
 background("aqua");
 parttext();
 textSize(24);
 text(textdeliver,100,windowHeight/2);
 if(mousePressedOver(egglocater)&&number==0)
  {
    elpart1.visible=false;
    number++;
    console.log(number);
  }
 drawSprites();
}
function parttext()
{
  if(number==0)
  {
    console.log("num=0")
    textdeliver="Build the Golden Egg locater Before going on the expediture";
    //var randwidth=random(100,windowWidth-100);
    //var randheight=random(100,windowHeight-100)
    elpart1=createSprite(windowWidth-700,windowHeight-300,50,50);
    elpart1.addImage(elpart1img);
    elpart1.scale=0.3
    elpart2=createSprite(windowWidth-500,windowHeight/8,50,50);
    elpart2.addImage(elpart2img);
    elpart2.scale=0.3
    elpart3=createSprite(windowWidth/8,windowHeight/5,50,50);
    elpart3.addImage(elpart3img);
    elpart3.scale=0.3
    if(mousePressedOver(elpart1)||mousePressedOver(elpart2)||mousePressedOver(elpart3))
    {
      egglocater=createSprite(windowWidth/2,windowHeight/2,50,50);
      egglocater.addImage(egglocaterimg);
      egglocater.scale=0.3;
      textdeliver="You have made the egg locater Press the Egg locater to move Forward";
    }
  }
  if(number==1)
  {
    textdeliver="You're now on a expedition to find the Golden Egg which contains a special formula which contains Powers to rule the entire Earth"
    console.log("destroy")
    elpart1.visible=false;
    elpart1.destroy();
    elpart2.destroy();
    elpart3.destroy();
    egglocater.destroy();
    callbutton();
  }
  if(number==2)
  {
    textdeliver="You have Located the Egg 350 miles north of you through your Golden Egg locater";
    egglocater=createSprite(100/2,100/2,50,50);
    egglocater.addImage(egglocaterimg);
    egglocater.scale=0.3;
    callbutton();
  }
  if(number==3)
  {
    textdeliver="You're within range to see the Golden Egg Reflecting the sun light but only to see that two other people are coming towards it";
    egglocater.destroy();
    egg=createSprite(windowWidth/2,windowHeight/2,50,50);
    egg.addImage(eggimg);
    egg.scale=0.2;
    enemy1=createSprite(egg.x+400,windowHeight/2-100,50,50);
    enemy2=createSprite(egg.x+400,windowHeight/2+100,50,50);
    player=createSprite(egg.x-400,windowHeight/2,50,50)
    callbutton();
  }
  if(number==4)
  {
    textdeliver="You get closer";
    player.x=egg.x-300;
    callbutton();
  }
  if(number==5)
  {
    textdeliver="You could see them marching"
    enemy1.x=egg.x+300;
    enemy1.x=egg.x+300;
    callbutton();
  }
  if(number==6)
  {
    textdeliver="You shoot at them";
    createbullets();

  }
  if(number==7)
  {
      
  }
  if(number==8)
  {
      
  }
  if(number==9)
  {
      
  }
  if(number==10)
  {
      
  }
  if(number==11)
  {
      
  }

}
function callbutton()
{
  button=createButton("Next");
  button.position(1450,20);
  button.mousePressed(()=>{
   number++
   button.hide();
  });
}
function createbullets()
{
  var textbullets="Press Space to shoot";
  text(textbullets,windowWidth/2,windowHeight/2+250);
  if(KeyDown("Space"))
  {
  var bullet=createSprite(player.x,player.y,10,10)
  bullet.velocityX=6;
  }
}