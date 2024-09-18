import router from "./controllers/router.js"
import Nav from "./components/Nav.js"

// IIFE (Inmediatly Invoked Function Expression)
(() => document.addEventListener('DOMContentLoaded', () => {
    Nav("SPA")
    document.addEventListener('click', (e) => router(e))
}))()