import Piece from "./Piece.js"
import { check, checkAll, isValidMove } from "./utils.js"

export default class Board{
    board = []
    createBoard () {
        this.board = Array.from({length:8},(_,row) => 
        Array.from({length: 8}, (_,col) => ({
            row, col,
            className: 'cell '+(check(row, col) ?'odd':'even'),
            children: checkAll(row,col) ? 
            new Piece({row, col, color: row < 4?'red':'black'}) : null
        })
    ) )
    }
    render(parent){
        const board = Object.assign(document.createElement('div'), {
            className: 'board',
            innerHTML: this.renderCells()
        })
        parent.appendChild(board)
    }
    renderCells(content=''){
        for (let row of this.board)
        for(let cell of row){
            const { children:c } = cell
            content+=`
            <div class="${cell.className}" data-row="${cell.row}" data-col="${cell.col}">
                ${c ? c.render() : '' } 
            </div>`
        }
        return content
    }
    movePiece(coords){
        const { x, y, toX, toY} = coords
        if(isValidMove(coords)){
            const piece = this.board[x][y]
            const movedPieced = this.board[toX][toY]

            this.board[toX][toY] = piece
            this.board[x][y] = movedPieced
            
            piece.children.move(toX, toY)
            return true
        }
            else return false
        }
}