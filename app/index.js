import Nav from "./Nav.js"
import cardGame from "./cards/index.js"
import checkers from "./checkers/index.js"
import renderClock from "./clock/index.js"
document.addEventListener('DOMContentLoaded', () => {
    Nav()
    checkers()
    renderClock()
    cardGame()
})