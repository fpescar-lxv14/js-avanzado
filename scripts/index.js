const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
    // Componentes
    function Link ({text, link}, parent){
        const a = document.createElement('a');
        a.innerText = text
        a.setAttribute('href', link)
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
    // Ejecucion
    Nav()
})