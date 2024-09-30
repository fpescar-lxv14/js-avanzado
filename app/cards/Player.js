export class Player{
    reset(){
        this.money = 1000;
        this.clear();
    }
    clear(){
        this.ammount = 0
        this.score = 0
    }
    bet(n = null){
        const x = isNaN(n) || n === null ? 10 : n;
        if(x <= this.money){
            this.money -= x;
            this.ammount += x;
            return "apuesta realizada"
        }
        else return "no puede apostar esa cantidad"
    }
    hit(card){
        const x = Number(card)
        this.score += this.score >= 11 && x === 11 ? 1 : x;
    }
    check(){
        return this.score >= 17 && this.score <= 21
    }
    win(){
        this.money += (this.ammount * 2)
        this.clear()
    }
    lose(){
        this.clear()
    }
    draw(){
        this.money += this.ammount
        this.clear()
    }
}

class PokerPlayer extends Player{
    hit(card){
        this.hand.push(card)
    }
}