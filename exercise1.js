class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem(){
        let randomNumber = Math.floor(Math.random() * 2)

        let item = {
            health: 0,
            power: 0
        }

        switch(randomNumber){
            case 0:
                item.health = 10
                item.power = 0
                break;
            case 1:
                item.health = 0
                item.power = 10
                break;
        }
        return item
    }

    start(){
        let attack = this.player1
        let defense = this.player2
        while(this.player1.health > 0 && this.player2.health > 0){
            let item1 = this.getRandomItem()
            let item2 = this.getRandomItem()

            this.player1.useItem(item1)
            this.player2.useItem(item2)

            console.log(" ---- after getting item ---- ")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log(" ---- after getting item ---- ")

            defense.damage(attack.power)

            console.log(" ---- after shooting ---- ")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log(" ---- after shooting ---- ")

            if(attack.name == this.player1.name){
                attack = this.player2
                defense = this.player1
            } else {
                attack = this.player1
                defense = this.player2
            }

            console.log("End of turn")
        }

        if(this.player1.health > 0){
            console.log(this.player1.name, " wins")
        } else {
            console.log(this.player2.name, " wins")
        }
    }
}

class Player {
    name = ""
    health = 100
    power = 10

    constructor(name){
        this.name = name
    }

    damage(power){
        this.health -= power
    }

    useItem(item){
        this.health += item.health
        this.power += item.power
    }

    showStatus(){
        console.log(this.name , " health = ", this.health)
        console.log(this.name , " power = ", this.power)
    }
}

let player1 = new Player("Felix")
let player2 = new Player("Aul")

let shootGame = new ShootingGame(player1, player2)

shootGame.start()