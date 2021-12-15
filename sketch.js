var bow , arrow,  scene;
var bowImage, arrowImage, red_balloonImage, backgroundImage,greenballoonImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png"); 
  
}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
   
}

function draw() {
 background(0);
  // movendo o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //movendo o arco
  bow.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 1) {
   if (select_balloon == 1) {
      redBalloon();
   } else if (select_balloon == 2) {
    greenBalloon();
   } 
 }  
    
  drawSprites();
}


// Criando flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
red.addImage(red_balloonImage);
red.velocityX = 3;
red.lifetime = 150;
red.scale = 0.1;
}
function greenBalloon() {
    var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    green.addImage(greenballoonImage);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    }