class Player{
    constructor(){
    this.index = null
    this.name = null        
    this.distance = 0
    }

    getplayercount(){
        var ref = database.ref('PlayerCount');
        ref.on('value',function(data){
            PlayerCount=data.val();
        })
    }

    updateplayercount(count){
        var Ref = database.ref('/')
        Ref.update({
            PlayerCount : count
        })
    }

    updateplayer(){
        var playerindex = ("players/player" + this.index)
        var REF = database.ref(playerindex)
        REF.set({
            playername : this.name,
            distance = this.distance

        })
    }


    
    static getallplayerinfo(){
        var ref = database.ref("Players")
        ref.on("value",(data)=>{
            allplayers = data.val();

        })

        
    }

}


