import Nav from "./Nav.js"
import checkers from "./checkers/index.js"
import renderClock from "./clock/index.js"
document.addEventListener('DOMContentLoaded', () => {
    Nav()
    checkers()
    renderClock()
})