import Clock from "./Clock.js";
import Chron from "./Chron.js";
import Timer from "./Timer.js";

export default function renderClock(){
    let clock = new Chron(0,0,0), interval;
const root = document.getElementById('root');
const clockBox = document.createElement('div')
clockBox.setAttribute('id','clock-time')
clockBox.innerHTML = `
    <p id="clock">00:00:00</p>
    <input class="time" type="number" id="HH" name="HH">
    <input class="time" type="number" min="0" max="59" id="mm" name="mm">
    <input class="time" type="number" min="0" max="59" id="ss" name="ss">
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
const setTime = () => clockBox.children.clock.innerHTML = clock.showTime()
function start(){
    pause();
    interval = setInterval( () => {
    if (Timer.prototype.isPrototypeOf(clock)) clock.alarmClock()
    else clock.runClock()
        setTime()
    }, 1000)
}
function pause(){
    clearInterval(interval);
}
function stop(){
    pause()
    clock.arrayReset(['HH',"mm","ss"]);
    setTime()
}
function setInput (){
    const { HH, mm, ss, select} = clockBox.children
    const ClassObject = select.value == 0 ? Chron : Timer
    clock = new ClassObject(HH.value, mm.value, ss.value)
    setTime()
}

function setClick (e){
    /start|stop|pause/.test(e.target.id) && eval(`${e.target.id}()`)
}


clockBox.addEventListener('click', setClick)
clockBox.addEventListener('input', setInput)
root.appendChild(clockBox)
}