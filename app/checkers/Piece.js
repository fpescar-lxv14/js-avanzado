export default class Piece{
    constructor({row, col, color}){
        this.row = row,
        this.col = col,
        this.color = color
    }
    render(){
        return `<img src=" ${color}" data-col data-row/>`
    }
}