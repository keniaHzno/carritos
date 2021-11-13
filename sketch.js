var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var distancia=0;
var datosJugadores;

var carro1,carro2, carro3, carro4;
var carros;

function setup(){
  canvas = createCanvas(displayWidth-5,displayHeight-5);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
    if(playerCount===4){
game.update(1);
    }
    if(gameState===1){
        clear ();
        game.play();
    }
}








/*var ball;
var basededatos;
var position;
var posdeball;

function setup(){
    createCanvas(500,500);
    //llamar a base de datos
    basededatos=firebase.database();
    posdeball=basededatos.ref('ball/position');
    posdeball.on("value",readPosition,showError);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        escribePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        escribePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        escribePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        escribePos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
position = data.val();
ball.x=position.x;
ball.y=position.y;
}
function showError(){
console.log("hay un error");
}
function escribePos(x,y){
basededatos.ref('ball/position').set({
    'x':position.x+x,'y':position.y+y
})

}*/
