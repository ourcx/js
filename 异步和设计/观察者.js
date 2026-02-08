class Subject {
    constructor() {
        this.observers = []
    }
    add(observer){
        this.observers.push(observer)
    }
    remove(observer){
        this.observers = this.observers.filter(item => item !== observer)
    }
    notify(data){
        this.observers.forEach(item => item.update(data))
    }
}

class Observer {
    constructor() {
        this.state = 0
    }
    update(data){
        this.state = data;
        console.log(this.state)
    }
}