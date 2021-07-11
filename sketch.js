var database;
var playerCount;
var gameState=0;
var form,player,game;
var distance=0;

var allPlayers;
var car1,car1Img, car2,car2Img, car3,car3Img, car4,car4Img;
var track,trackImg,cars;
var ground,groundImg;
function preload(){

  car1Img=loadImage("imaages/car1.png");
  car2Img=loadImage("imaages/car2.png");
  car3Img=loadImage("imaages/car3.png");
  car4Img=loadImage("imaages/car4.png");
  trackImg=loadImage("imaages/track.jpg");
  groundImg=loadImage("imaages/ground.png");

}

function setup(){
createCanvas(displayWidth-20,displayHeight-30)

database = firebase.database();

 game = new Game();
  game.getState(); 
  game.start();

}

function draw(){

  if(playerCount === 4){
     game.update(1); 

    } 
  if(gameState === 1){
     clear();
     game.play(); 
    }
    if(gameState===2){
      game.end()
      //console.log ("GAME ENDED")
    }
}