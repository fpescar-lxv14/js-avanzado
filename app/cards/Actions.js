import { Player } from "./Player.js";

export function Actions(){
    const bj = document.getElementById('blackjack');
    const player = new Player;
    function cleanMat(){
        if (confirm("¿Desea continuar?")) {
        const spaces = bj.querySelectorAll('.card-space.occupied')
            spaces.forEach(s => Object.assign(s,{
                className: 'card-space', innerHTML: ''
            }));
        }
    }
    function callVictory(){
        player.win()
        return "FELICITACIONES HAS GANADO"
    }
    function callDefeat(why = ""){
        player.lose()
        return "LO SENTIMOS, PERDISTE "+ why
    }
    bj.addEventListener('click', (e) => {
        const { id, tagName } = e.target
        if(tagName === "BUTTON"){
            switch(id){
                case "newGame":
                    player.reset()
                    bj.querySelectorAll('button').forEach(btn=> btn.disabled = false)
                    break;
                case "makeBet":
                    console.log(player.bet())
                    console.log(player)
                break;
                case "hit":
                    const card = bj.querySelector('.card-box li:last-child');
                    const space = bj.querySelector('.card-space:not(.occupied)');
                    space.appendChild(card);
                    space.classList.add('occupied')
                    player.hit(card.dataset.value)
                    console.log(player)
                    if (player.score > 19){
                        setTimeout( () => {
                            alert(player.check()?callVictory(): callDefeat())
                            cleanMat()
                        }, 10)
                    }
                break;
                case "stay":
                    alert(player.check() ? callVictory() : callDefeat())
                    cleanMat()
                break;
                case "fold":
                    alert(callDefeat("PORQUE TE RENDISTE\n(Retroceder Nunca, rendirse Jamas)"))
                break;
            }
        }
    })
}