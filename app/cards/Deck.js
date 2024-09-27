import { CardFactory } from "./Card.js";
export default class Deck {
    cards = [];
    createDeck(){
        const royal = ["J","Q","K","A"];
        Array.from({length: 4}, (_,i) => {
            const cf = new CardFactory()
            for(let n = 2; n <= 10; n++) 
                this.cards.push(cf.createCard(n,i))
            royal.map((f,i) => 
                this.cards.push(cf.createCard(f,i)))
        })
        return this.cards
    }
    suffle(){
        console.log('...barajando')
    }
}