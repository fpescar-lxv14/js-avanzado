export default function Nav(){
    const navLinks = [
        { text: 'Damas', link: 'checkers-game' },
        { text: 'Reloj', link: 'clock-time' },
        { text: 'Cartas', link: 'blackjack' },
    ]
    const root = document.getElementById('root');
    const nav = Object.assign(document.createElement('nav'),{
        className: 'navbar navbar-dark navbar-expand-md bg-dark bg-gradient sticky-top p-2',
        innerHTML: `
            <a href="#">GameHub</a>
            ${renderLinks(navLinks)}
        `
    })
    function renderLinks(navLinks){
        let data='<ul>'
        for(let item of navLinks)
        data+=`<li><a href="#${item.link}">${item.text}</a></li>`
        data+='</ul>';
        return data;
    }
    root.appendChild(nav)
}