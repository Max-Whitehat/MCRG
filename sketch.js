var database;
var gamestate = 0;
var PlayerCount = 0;
var player, allplayers;
var form;
var game;

function setup(){
    createCanvas(800,600)
    database=firebase.database();
    game = new Game()
    game.getgamestate();
    game.start();


}


function draw(){
if(PlayerCount === 2){
    game.updategamestate(1)
}

if(gamestate === 1){
    clear();
    game.play()
}

}



