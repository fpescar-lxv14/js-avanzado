import Clock from "./Clock.js";
export default class Timer extends Clock{
    base = 59;
    limit = 0;
    rigntone = ""
    message = "Se acabo el tiempo"
    ready = false;
    check(u){
        return this[u] <= this.limit;
    }
    arrayCheck(args){
        for(let u of args) return this.check(u)
    }
    setMessage(msg){
        this.message = msg
    }
    setSound (src) {
        this.rigntone = src
    }
    alarmCheck(){
        return this.arrayCheck("HH","mm","ss")
    }
    alarmClock(){
        this.runClock(-1)
        if (this.alarmCheck()) 
        return this.ready = true
    }
}