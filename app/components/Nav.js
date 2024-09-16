import { links, toggle, root } from '../models/index.js'
import Request from '../controllers/request.js'
import Render from './Render.js'
import { Button } from './Button.js'
import { MapLinks } from './Link.js'

export default function Nav(App){
    const nav = Object.assign(document.createElement('nav'),{
    className: "navbar navbar-dark navbar-expand-md bg-dark | p-2",
    innerHTML:`
        <a class="navbar-brand">${App ?? "JS"}</a>
        ${Button(toggle)}
        <ul class="navbar-nav navbar-collapse collapse">${MapLinks(links)}</ul>`,
    onclick: async (e) => {
        e.preventDefault()
        if (e.target.tagName === "A") {
            const link = e.target.href.split("#")[1]
            const data = await Request('https://jsonplaceholder.typicode.com/'+link)
            Render(data)
        }
    }
    })
    root.appendChild(nav);
}