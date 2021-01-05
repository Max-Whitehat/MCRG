class Game{
    constructor(){
        
    }
    getgamestate(){
        var ref = database.ref('gamestate');
        ref.on('value',function(data){
            gamestate=data.val();
        })
    }
    updategamestate(state){
        var Ref = database.ref('/')
        ref.update({
            gamestate : state
        })
}

    start(){
        if(gamestate === 0){
            player = new Player();
            player.getplayercount();
            form = new Form();
            form.display();


        }
    }

    play(){
        form.hide();
        text("Nothing",400,300)
      
        Player.getallplayerinfo();
        if(allplayers !== undefined){

            var x = 400
            var y = 300


            for(var PLR in allplayers){
                
                if(PLR === "player"+"player.index")
               fill("red")
               else{
                fill("black")
               }

   

        text(allplayers [PLR].name + ":" + allplayers[PLR].distance,x,y)

        y=y+20

        

            }
        
         }

         if(keyDown(UP_ARROW)&&player.index !== null){
             player.distance+=50
             player.updateplayer();
         }

    }

}