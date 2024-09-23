export default class Player{
    constructor(name = "player1", color="black", checkers=12){
        this.name = name;
        this.color = color; 
        this.checkers = checkers
        this.isTurn = false;
        this.status = null
    }
    changeTurn(){
        return this.isTurn != this.isTurn;
    }
    checkStatus(rivalCheckers){
        if (!this.checkers.length){
            this.status = "has perdido"
        }
        if (!rivalCheckers.length){
            this.status = "has ganado"
        }
    }
    pieceLost(){
        this.checkers-=1;
    }
    init(){
        this.checkers = 12
        this.isTurn = false;
        this.status = null
    }
}