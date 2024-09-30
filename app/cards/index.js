import Deck from "./Deck.js";
import { Actions } from "./Actions.js";
export default function cardGame (){
    const game = new Deck()
    game.shuffle() 
    const root = document.getElementById('root');
    const gameBox = Object.assign(document.createElement('section'),{
        id:'blackjack',
        innerHTML: game.render()
    })
    root.appendChild(gameBox)
    Actions();
}