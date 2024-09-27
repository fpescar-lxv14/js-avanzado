class Card{
    constructor(card){
        this.suite = card.suite // dibujo
        this.symbol = card.symbol // numero o letra
        this.color = card.color
        this.value = card.value
    }
}
export class CardFactory{
    createCard(symbol,index){
        let suite="";
        switch(index){
            case 0: suite = "♠" ; break;
            case 1: suite = "♥" ; break;
            case 2: suite = "♣" ; break;
            case 3: suite = "♦" ; break;
        }
        return new Card({
            suite, 
            symbol,
            value: this.getValue(symbol),
            color: this.getColor(index)
        })
    }
    getValue(s){
        return /Q|K|J/.test(s) ? 10 : s === "A" ? 11 : s
    }
    getColor(n){
        return this.color = n % 2 === 0 ? 'black' : 'red'
    }
}