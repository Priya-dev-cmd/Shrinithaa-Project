var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var rand=0;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img,bg;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/boy_changed.png");
  car2_img = loadImage("../images/girl_changed.png");
  car3_img = loadImage("../images/girl_changed.png");
  car4_img = loadImage("../images/girl_changed.png");
  ground = loadImage("../images/ground.png");
  bg=loadImage("../images/backgImg.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  rand=1;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
