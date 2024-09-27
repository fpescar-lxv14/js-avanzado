import Chron from "./Chron.js";
import Timer from "./Timer.js";

export default function renderClock(){
    let clock, interval;
const root = document.getElementById('root');
const clockBox = document.createElement('div')
clockBox.setAttribute('id','clock-time')
clockBox.innerHTML = `
    <p id="clock">00:00:00</p>
    <input class="time" type="number" id="HH" name="HH">
    <input class="time" type="number" id="mm" name="mm">
    <input class="time" type="number" id="ss" name="ss">
    <select id="select" class="controls">
        <option value="0">Cronometro</option>
        <option value="1">Temporizador</option>
    </select>
    <div class="controls">
        <button id="start">Iniciar</button>
        <button id="pause">Pausar</button>
        <button id="stop">Detener</button>
    </div>
`
function stop(){
    clearInterval(interval);
}
function setInput (e){
    const {clock:c, HH, mm, ss, select} = clockBox.children
    const ClassObject = select.value == 0 ? Chron : Timer
    clock = new ClassObject(HH.value, mm.value, ss.value)
    c.innerHTML = clock.showTime()
}

function setClick (){

}


clockBox.addEventListener('click', (e) => console.log("click", e.target.id))
clockBox.addEventListener('input', setInput)
root.appendChild(clockBox)
}