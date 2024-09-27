import Board from "./Board.js";
import Player from "./Player.js";

export default class Game{
    board = new Board();
    players = [
        new Player('p1'),
        new Player('p2','red')
    ]
    current = 1;
    start(){
        this.board.createBoard()
        this.players.forEach(p => p.init())
    }
    render(){
        const game = Object.assign(document.createElement('section'),{
            id: 'checkers-game',
            innerHTML: `
            <div class="player">
                Turno: ${this.players[this.current].name}
                ${this.players.map(p => p.render()).join().replace(",","")}
            </div>
            <div class="board">
                ${this.board.renderCells()}
            </div>
            <div class="controls">
                <button id="start">start</button>
                <button id="save">save</button>
                <button id="load">load</button>
                <button id="reset">reset</button>
            </div>
            `
        })
        root.appendChild(game)
    }
    playerMove(coords){
    this.players.map((p,i) => {
    if (this.current == i) {
        const {color} = this.players[i]
        this.board.movePiece({...coords, color})
        this.current != this.current
        return true;
    }}
)}}