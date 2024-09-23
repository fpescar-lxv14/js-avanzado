import Board from "./Board.js";
import Player from "./Player.js";

export default class Game{
    board = new Board();
    players = [
        new Player('p1'),
        new Player('p2','red')
    ]
    gameStart(){
        this.board.createBoard()
        this.players.forEach(p => p.init());
        this.players[0].changeTurn()
    }
    playerMove({coords}){
        if (this.players.map(p => {
            p.isTurn && this.board.movePiece({color:p.color, ...coords})
            return true
        })) this.players.forEach(p => p.changeTurn())
    }
}