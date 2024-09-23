import Board from "./Board.js"
export default function checkers () {
    const root = document.getElementById('root');
    const game = new Board();
    game.createBoard();
    game.render(root);
    const selected = {
        row: null,
        col: null,
    }
    document.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('checker')) {
            e.dataTransfer.setData('data',e.target.id)
            const [_,row,col] = e.target.id.split("-")
            selected.col = parseInt(col)
            selected.row = parseInt(row)
            console.log(game.board)
        }
    })
    document.addEventListener('dragover', (e) => e.preventDefault())
    document.addEventListener('drop', (e) => {
        e.stopPropagation()
        console.log(e)
        if(
            e.target.classList.contains('cell')
        ){
            const {row:x, col:y} = selected
            const {row, col} = e.target.dataset
            if (game.movePiece(x,y,row,col)){
                const id = e.dataTransfer.getData('data')
                const checker = document.getElementById(id)
                e.target.appendChild(checker)
                console.log(game.board)
            }
        }
    })
}