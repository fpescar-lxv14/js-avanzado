export default class Clock {
    constructor(HH,mm,ss){
        this.days = 0;
        this.HH = Number(HH)
        this.mm = Number(mm)
        this.ss = Number(ss)
    }
    format(n){
        return n < 10 ? '0' + n : n
    }
    showTime(){
        const { format:f, HH, mm, ss } = this
        return `${f(HH)}:${f(mm)}:${f(ss)}`
    }
    reset(u){
        this[u] = this.base
    }
    arrayReset(...args){
        for (u of args) this.reset(u)
    }
    dayCheck(){
        return (this.HH >=23 && this.check("mm") && this.check("ss"))
    }
    hourCheck(){
        return (this.check("mm") && this.check("ss"))
    }
    minCheck(){
        return (this.check("ss"))
    }
    runClock(n=1){
        if(this.dayCheck()) {
            this.days += n
            this.arrayReset("HH","mm","ss")
        }
        else if(this.hourCheck()) {
            this.HH += n
            this.arrayReset("mm","ss")
        }
        else if(this.minCheck()) {
            this.mm += n;
            this.ss = this.base;
        }
        else this.ss += n;
    }
}