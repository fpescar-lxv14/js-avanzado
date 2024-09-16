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
        if (e.target.tagName === "A") console.log(e.target)
    }
    })
    root.appendChild(nav);
}