import { links, toggle, root } from '../models/index.js'
import { Button } from './Button.js'
import { MapLinks } from './Link.js'

export default function Nav(App){
    const nav = Object.assign(document.createElement('nav'),{
    className: "navbar navbar-dark navbar-expand-md bg-dark | p-2",
    innerHTML:`
        <a class="navbar-brand">${App ?? "JS"}</a>
        ${Button(toggle)}
        <ul class="navbar-nav navbar-collapse collapse">${MapLinks(links)}</ul>`,
    onclick: (e) => {
        e.preventDefault()
        if (e.target.tagName === "A") console.log(e.target)
    }
    })
    root.appendChild(nav);
}