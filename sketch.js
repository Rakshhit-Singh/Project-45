var black, dark, light, orange, red, pink, teal;
var blacki, darki, lighti, orangei, redi, pinki, teali;

var player;
var cafiteria;

var button, button1, button2, button3; 


function preload(){

    blacki=loadImage("Black.png");
    darki=loadImage("darkim.png");
    lighti=loadImage("light_green.png");
    orangei=loadImage("orange.png");
    redi=loadImage("red.png");
    pinki=loadImage("pink.png");
    teali=loadImage("teal.png");

    cafeteria=loadImage("Cafeteria.jpg")

    
}


function setup(){
createCanvas(displayWidth, displayHeight)

button = createButton("Task 1");
button.position(displayWidth/2-35, displayHeight/2);

button1 = createButton("Task 2");
button1.position(displayWidth/2-35, 50);

button2 = createButton("Task 3");
button2.position(35, displayHeight/2);

button3 = createButton("Task 4");
button3.position(displayWidth-75, displayHeight/2);

button3 = createButton("Task 5");
button3.position(displayWidth/2-35, displayHeight-50);


player= createSprite(displayWidth/2, displayHeight/2)
player.visible=false

black= createSprite(displayWidth/2-175, displayHeight/2+30)
black.addImage(blacki);
black.scale=0.1;


dark= createSprite(displayWidth/2+165, displayHeight/2-85)
dark.addImage(darki);
dark.scale=0.18

light= createSprite(displayWidth/2+60, displayHeight/2-135)
light.addImage(lighti);
light.scale=0.1;

orange= createSprite(displayWidth/2-70, displayHeight/2+85)
orange.addImage(orangei);
orange.scale=0.34;

red= createSprite(displayWidth/2+175, displayHeight/2+30)
red.addImage(redi);
red.scale=0.15;

pink= createSprite(displayWidth/2-175, displayHeight/2-75)
pink.addImage(pinki);
pink.scale=0.1;

teal= createSprite(displayWidth/2-75, displayHeight/2-140)
teal.addImage(teali);
teal.scale=0.175;
}

function draw(){
background(cafeteria)

choosePlayer();


if(keyIsDown(UP_ARROW)){
    player.y=player.y-5;

}

if(keyIsDown(DOWN_ARROW)){
    
player.y=player.y+5
}

if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+5

}

if(keyIsDown(LEFT_ARROW)){
    
player.x=player.x-5
}

drawSprites();
    
}

function choosePlayer(){
    if(mousePressedOver(dark)){

        player.addImage(darki)
        player.visible=true
        player.scale=0.18
    
        dark.visible=false
        black.visible=false
        light.visible=false
        pink.visible=false
        teal.visible=false
        orange.visible=false
        red.visible=false
      }
    
      else if (mousePressedOver(light)){
        player.addImage(lighti)
    
        player.scale=0.1;
        player.visible=true
        light.visible=false
    
        black.visible=false
        dark.visible=false
        pink.visible=false
        teal.visible=false
        orange.visible=false
        red.visible=false
      }
    
      else if (mousePressedOver(orange)){
        player.addImage(orangei)
        player.scale=0.34;
    
        orange.visible=false
        player.visible=true
        black.visible=false
        light.visible=false
        pink.visible=false
        teal.visible=false
        dark.visible=false
        red.visible=false
      }
    
      else if(mousePressedOver(black)){
        player.addImage(blacki)
    
        player.scale=0.1;
        
        black.visible=false
        player.visible=true
        dark.visible=false
        light.visible=false
        pink.visible=false
        teal.visible=false
        orange.visible=false
        red.visible=false
      }
    
      else if(mousePressedOver(pink)){
        player.addImage(pinki)
    
        player.scale=0.1;
    
        pink.visible=false
        player.visible=true
        black.visible=false
        light.visible=false
        dark.visible=false
        teal.visible=false
        orange.visible=false
        red.visible=false
      }
    
      else if(mousePressedOver(teal)){
        player.addImage(teali)
    
        player.scale=0.2;
    
        teal.visible=false
        player.visible=true
        black.visible=false
        light.visible=false
        pink.visible=false
        dark.visible=false
        orange.visible=false
        red.visible=false
      }
    
      else if(mousePressedOver(red)){
        player.addImage(redi)
    
        player.scale=0.15;
    
        red.visible=false
        player.visible=true
        black.visible=false
        light.visible=false
        pink.visible=false
        dark.visible=false
        orange.visible=false
        teal.visible=false
      }

}
