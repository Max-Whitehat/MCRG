class Form{
    constructor(){
        this.title = createElement('h6')
        this.inputbox = createInput("name")
        this.button = createButton("submit")
        this.greeting = createElement("h3")
    }
    display(){
       
        this.title.html("Multiplayer-Car-Racing-Game")
      
        this.title.position(130,0)


        this.inputbox.position(130,160)

     
        this.button.position(250,200)
       
        this.greeting.position(10000,10000)

        this.button.mousePressed(()=>{
           this.inputbox.hide()
        this.button.hide()

            player.name = this.inputbox.value();
            PlayerCount += 1
            player.index=PlayerCount
            player.updateplayer(player.name)

            player.updateplayercount(PlayerCount)

            this.greeting.position(400,300)
            this.greeting.html("hello " + player.name + " lets wait for other players to join")
            
        })
    }

    hide(){
        this.inputbox.hide()
        this.greeting.hide()
        this.button.hide()
        this.title.hide()
    }

}