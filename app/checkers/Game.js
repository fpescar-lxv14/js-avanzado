import Board from "./Board.js";
import Player from "./Player.js";

export default class Game{
    board = new Board();
    players = [
        new Player('p1'),
        new Player('p2','red')
    ]
    start(){
        this.board.createBoard()
        this.players.forEach(p => p.init());
        this.players[0].changeTurn()
    }
    render(){
        const game = Object.assign(document.createElement('section'),{
            innerHTML: `
            <div class="player">
                ${this.players.map(p => p.render())}
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
    playerMove({coords}){
        if (this.players.map(p => {
            p.isTurn && this.board.movePiece({color:p.color, ...coords})
            return true
        })) this.players.forEach(p => p.changeTurn())
    }
}