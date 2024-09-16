import { links, root } from '../models/index.js'
import { MapLinks } from './Link.js'

export default function Nav(App){
    const nav = Object.assign(document.createElement('nav'),{
    innerHTML:`
        <a>${App ?? "JS"}</a>
        <button>&equiv;</button>
        <ul>${MapLinks(links)}</ul>`,
    onclick: (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    })
    nav.addEventListener('click', ()=>console.log("click"))
    root.appendChild(nav);
}