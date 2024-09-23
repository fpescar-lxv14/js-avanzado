const check = (x,y) => x % 2 === y % 2
const checkRow = (n) => n < 3 || n > 4
const checkAll = (x,y) => check(x,y) && checkRow(x)
export default class Board{
    board = []
    createBoard () {
        this.board = Array.from({length:8},(_,row) => 
        Array.from({length: 8}, (_,col) => 
        check(row, col) ? {
            row, col,
            className: 'cell odd', 
            children: checkRow(row) && {
            row, col, className: 'checker '+(row<4?'red':'black')
        } } : {
            row, col, className: 'cell even'
        }
    ) ) }
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
            ${c ? `
            <img id="checker-${c.row}-${c.col}"
                class="${c.className}" 
                src="/assets/checker.svg" 
                alt="${c.row}-${c.col}"
                draggable="true">` : ''}
            </div>`
        }
        return content
    }
    movePiece(x,y,toX,toY){
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
            return true
        }
        else return false
    }
}