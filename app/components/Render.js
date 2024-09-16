import { root, main } from "../models/index.js";
import Friend from "./Friend.js";

export default function Render(data){
    main.innerHTML = ''
    const section = document.createElement('section')
    section.setAttribute('class', 'container col-md-9 col-xl-6 d-grid gap-2')
    section.innerHTML = "<h2>Amigos</h2>"
    if (data.length){
        data.forEach(item => {
            const renderData = Friend(item)
            section.innerHTML += renderData
        })
    }
    main.appendChild(section)
    root.appendChild(main)
}