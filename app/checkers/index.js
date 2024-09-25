import Game from "./Game.js"
export default function checkers () {
    const root = document.getElementById('root');
    const game = new Game();
    game.start();
    game.render(root);
    const selected = {}
    const selectPiece = ({target:{id, dataset:{col,row}}}) =>{
        selected.id = id;
        selected.row = row;
        selected.col = col;
    }
    const emptySelect = () => {
        selected.id = null,
        selected.row = null,
        selected.col = null
    }
    const dragStart = (e) => {
        if (e.target.classList.contains('checker')) {
            e?.dataTransfer?.setData('data', e.target.id)
            selectPiece(e)
        }
    }
    const onDrop = (e) => {
        e.stopPropagation()
        if(e.target.classList.contains('cell')){
            const {row:x, col:y} = selected
            const {row:toX, col:toY} = e.target.dataset
            if (game.movePiece({x,y,toX,toY})){
                const id = e?.dataTransfer?.getData('data') ?? selected.id
                const checker = document.getElementById(id)
                e.target.appendChild(checker)
                checker.dataset.row=row 
                checker.dataset.col=col
                emptySelect()
            }
        }
    }
    const clickDrag = (e) => (selected.id ? onDrop(e) : dragStart(e))

    document.addEventListener('click',clickDrag)
    document.addEventListener('dragstart',dragStart)
    document.addEventListener('dragover',(e) => e.preventDefault())
    document.addEventListener('drop',onDrop)
}