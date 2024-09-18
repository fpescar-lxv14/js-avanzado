import Request from "./request.js"
import Render from "../components/Render.js"

export default async function router(e){
    e.preventDefault()
    if (e.target.classList.contains('link')) {
        const link = e.target.getAttribute('data-link') ?? e.target.getAttribute('href').split("#")[1]
        if (link){
            history.pushState("","",link)
            const data = await Request('https://jsonplaceholder.typicode.com/'+link)
            Render(data, link)
        }
    }
}