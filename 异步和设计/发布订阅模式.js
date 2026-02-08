class EventEmitter {
    constructor() { this.events = {} }

    on(events,cb){
        if(!this.events[events]){
            this.events[events] = []
        }
        this.events[events].push(cb)
    }
    emit(events,...args){
        if(this.events[events]){
            this.events[events].forEach(cb => cb(...args))
        }
    }
    off(events,cb){
        if(this.events[events]){
            this.events[events] = this.events[events].filter(c => c !== cb)
        }
    }
    once(events,cb){
        const onceCb = (...args) => {
            cb(...args)
            this.off(events,onceCb)
        }
        this.on(events,onceCb)
    }
}



