import Clock from "./Clock.js";
export default function renderClock(){
const root = document.getElementById('root');
const clockContainer = document.createElement('div')
const clock = new Clock();
clockContainer.innerHTML = `
    <p id="clock"></p>
    <input class="time" type="number" id="HH" name="HH">
    <input class="time" type="number" id="mm" name="mm">
    <input class="time" type="number" id="ss" name="ss">
    <select class="controls">
        <option value="0">Cronometro</option>
        <option value="1">Temporizador</option>
    </select>
    <div class="controls">
        <button id="start">Iniciar</button>
        <button id="pause">Pausar</button>
        <button id="stop">Detener</button>
    </div>
`
clockContainer.addEventListener('click', (e) => console.log("click", e.target.id))
clockContainer.addEventListener('input', (e) => {
    console.log("input", e.target.value)
    clock[e.target.id] = e.target.value
    console.log(clock)
})
document.getElementById('root').appendChild(clockContainer)
}