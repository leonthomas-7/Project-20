var car1 ,car2 ,car3 ,car4;
var speed ,weight ,speed2 ,weight2 ,speed3 ,weight3 ,speed4 ,weight4;
var sep1 ,sep2 ,sep3 ,sep4 ,sep0;
var wall1 ,wall2 ,wall3 ,wall4;

function setup() {

  createCanvas(1700,400);
 car4=createSprite(20 ,300 ,20 ,20);
 car3=createSprite(20 ,220 ,20 ,20);
 car2=createSprite(20 ,140 ,20 ,20);
 car1=createSprite(20 ,60 ,20 ,20);
 sep0=createSprite(800 ,340 ,1600 ,5);
 sep1=createSprite(800 ,260 ,1600 ,5);
 sep2=createSprite(800 ,180 ,1600 ,5);
 sep3=createSprite(800 ,100 ,1600 ,5);
 sep4=createSprite(800 ,20 ,1600 ,5);
 wall1=createSprite(1575 ,60 ,10 ,75);
 wall2=createSprite(1575 ,140 ,10 ,75);
 wall3=createSprite(1575 ,220 ,10 ,75);
 wall4=createSprite(1575 ,300 ,10 ,75);
 speed=random(55 ,98);
 speed2=random(45 ,75);
 speed3=random(65 ,115);
 speed4=random(56 ,89);
 
weight=random(400 ,1500);
weight2=random(550 ,1090);
weight3=random(300 ,900);
weight4=random(600 ,1700);

car1.velocityX=speed;
car2.velocityX=speed2;
car3.velocityX=speed3;
car4.velocityX=speed4;

}

function draw() {
  background("black");  
  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
car1.shapeColor=color(255 ,0 ,0);
}
if(deformation<180&&deformation>100){
  car1.shapeColor=color(230 ,230 ,0);
}
if(deformation<100){
  car1.shapeColor=color(0 ,255 ,0);
}
 }

 if(wall2.x-car2.x<(car2.width+wall2.width)/2){
  car2.velocityX=0;
  var deformation2=0.5*weight2*speed2*speed2/22509;
  if(deformation2>180){
car2.shapeColor=color(255 ,0 ,0);
}
if(deformation2<180&&deformation2>100){
car2.shapeColor=color(230 ,230 ,0);
}
if(deformation2<100){
car2.shapeColor=color(0 ,255 ,0);
}
}
if(wall3.x-car3.x<(car3.width+wall3.width)/2){
  car3.velocityX=0;
  var deformation3=0.5*weight3*speed3*speed3/22509;
  if(deformation3>180){
car3.shapeColor=color(255 ,0 ,0);
}
if(deformation3<180&&deformation3>100){
car3.shapeColor=color(230 ,230 ,0);
}
if(deformation3<100){
car3.shapeColor=color(0 ,255 ,0);
}
}
if(wall4.x-car4.x<(car4.width+wall4.width)/2){
  car4.velocityX=0;
  var deformation4=0.5*weight4*speed4*speed4/22509;
  if(deformation4>180){
car4.shapeColor=color(255 ,0 ,0);
}
if(deformation4<180&&deformation4>100){
car4.shapeColor=color(230 ,230 ,0);
}
if(deformation4<100){
car4.shapeColor=color(0 ,255 ,0);
}
}
 drawSprites();
}