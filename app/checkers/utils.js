export const check = (x,y) => x % 2 === y % 2
export const checkRow = (n) => n < 3 || n > 4
export const checkAll = (x,y) => check(x,y) && checkRow(x)
export const isValidMove = ({x,y,toX,toY}) => isValid([[x,toX],[y,toY]])

export const isValid = (coords) => {
    const limits = coords.every(c => c[1] >= 0 && c[1] <= 7)
    const move = coords.every(c => c[1] === c[0] + 1 || c[1] === c[0] - 1)
    return (limits || move)
}