var navioimagem 
var marimagem
var navio 
var mar 

function preload(){
  navioimagem = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  marimagem = loadAnimation ("sea.png");
 
}



function setup(){
  createCanvas(400,400);
 mar = createSprite(150, 150, 50, 50);
 navio = createSprite(200, 200, 50, 50);
navio.addAnimation("arcadenoé",navioimagem)
mar.addAnimation("Tubarão",marimagem)
mar.velocityX= -4
navio.scale= 0.4
}
function draw() {
  background("blue");
    drawSprites();
   // if ( você lavar a louça){ir servir de escravo pra sogra}
 if (mar.x <= 0 ){
    mar.x=200

 }

 }

