export default class Player{
    constructor(name = "player1", color="black", checkers=12){
        this.name = name;
        this.color = color; 
        this.checkers = checkers
        this.status = null
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
        this.status = null
    }
    render(userData=''){
        Object.keys(this).map(k => userData+=`
        <li> 
            <strong>${k}:</strong> 
            ${this[k]}
        </li>`)
        return `<ul>${userData}</ul>`
    }
}