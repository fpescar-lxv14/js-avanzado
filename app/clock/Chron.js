import Clock from "./Clock.js";
export default class Chron extends Clock{
    base = 0;
    limit = 59;
    timemarks = []
    check (u){
        return this[u] >= this.limit
    }
    addTimeMark (){
        this.timemarks.push(this.showTime())
    }
    clearTimeMarks (){
        this.timemarks = []
    }
}