import Piece from "./Piece.js"
const check = (x,y) => x % 2 === y % 2
const checkRow = (n) => n < 3 || n > 4
const checkAll = (x,y) => check(x,y) && checkRow(x)
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
    movePiece({color,x,y,toX,toY}){
    if (this.board[x][y].children.color === color){
        if(
            (toX == x + 1 || toX == x - 1) &&
            (toX < 7 && toX > 0) &&
            (toY == y + 1 || toY == y - 1) &&
            (toY < 7 && toY > 0)
        ){
            const piece = this.board[x][y]
            const movedPieced = this.board[toX][toY]

            this.board[toX][toY] = piece
            this.board[x][y] = movedPieced
            
            piece.children.move(toX, toY)
            return true
        }
    }
        else return false
    }
}