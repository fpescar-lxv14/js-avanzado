import Deck from "./Deck.js";
export default function cardGame (){
    const game = new Deck()
    console.log(game.shuffle()) 
    console.log(game.cards)  
    const root = document.getElementById('root');
    const gameBox = Object.assign(document.createElement('section'),{
        id:'blackjack',
        innerHTML: game.render()
    })
    root.appendChild(gameBox)
}