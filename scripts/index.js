const root = document.getElementById('root');

const ajax = ({url, method = "GET", callback}) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method,url)
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) {
            if (xhr.status === 200){
                const data = JSON.parse(xhr.response)
                callback(data)
            }
            else callback([{
                error: 404,
                message: "no se ha encontrado la pagina"
            }])
        }
    })
    xhr.send()
}

document.addEventListener('DOMContentLoaded', () => {
    const server = "https://jsonplaceholder.typicode.com"
    const main = document.createElement('main');
    // Componentes
    function Link ({text, link}, parent){
        const a = Object.assign(document.createElement('a'), {
            href: link,
            innerText: text,
            onclick: (e) => {
                e.preventDefault()
                history.pushState("","",link)
                ajax({
                    url: `${server}/${link}`,
                    callback: (response) => Render(response)
                })
                Render(link)
            }
        })
        parent.appendChild(a)
    }
    function Nav(){
        const nav = document.createElement('nav');
        const links = [
            { text: "muro", link: "posts" },
            { text: "fotos", link: "albums" },
            { text: "amigos", link: "users" },
        ]
        links.forEach((item) => Link(item, nav))
        root.appendChild(nav);
    }
    function Render(data){
        main.innerHTML = "";
        data.map( item => {
            main.innerHTML+="<div>"
            Object.keys(item).map(k => main.innerHTML+=`
                <p><strong>${k}: </strong>${item[k]}</p>`)
            main.innerHTML+="</div><hr>"
        })
        root.appendChild(main)
    }
    // Ejecucion
    Nav()
})