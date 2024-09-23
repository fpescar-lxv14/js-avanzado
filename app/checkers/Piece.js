export default class Piece{
    constructor({row, col, color}){
        this.row = row
        this.col = col
        this.color = color
        this.isKing = false
    }
    render(){
        const { color, row:x, col:y } = this
        return `
        <img id="checker-${x}-${y}" class="checker ${color}" 
            src="assets/checker.svg" 
            data-col="${y}" 
            data-row="${x}"
            draggable="true"/>`
    }
    move(x,y){
        this.row = x
        this.col = y
        console.log(this)
    }
    crowned(){
        this.isKing = true;
    }
}