import { CardFactory } from "./Card.js";
export default class Deck {
    cards = [];
    constructor(){
        const royal = ["J","Q","K","A"];
        Array.from({length: 4}, (_,i) => {
            const cf = new CardFactory()
            for(let n = 2; n <= 10; n++) 
                this.cards.push(cf.createCard(n,i))
            royal.map((f,i) => 
                this.cards.push(cf.createCard(f,i)))
        })
    }
    shuffle(){
        for(let i=this.cards.length - 1; i > 0; i--){
            let r = Math.floor(Math.random() * i);
            [this.cards[r], this.cards[i]] = [this.cards[i], this.cards[r]];
        }
    }
    render(){
        let cardBox='<ul class="card-box">'
        for(let card of this.cards){
            cardBox+=`
            <li class="card ${card.color}" 
                data-suite="${card.suite}"
                data-value="${card.value}"
                draggable="true">
                ${card.symbol}
            </li>
            `
        }
        cardBox+=`</ul>
        <div class="card-mat">
            <ul class="card-space"></ul>
            <ul class="card-space"></ul>
            <ul class="card-space"></ul>
            <ul class="card-space"></ul>
            <ul class="card-space"></ul>
        </div>
        <div class="controls">
            <button id="newGame">Nuevo Juego</button>
            <button disabled id="makeBet">Apostar</button>
            <button disabled id="hit">Pedir Carta</button>
            <button disabled id="stay">Quedarse</button>
            <button disabled id="fold">Abandonar</button>
        </div>`
        return cardBox
    }
    getCard(){
        return this.cards.pop()
    }
}