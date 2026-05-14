class Scheduler {
    constructor(max) {
        this.max = max;
        this.running = 0;
        this.queue = [];
    }
    add(s){
        return new Promise((resolve,reject)=>{
            this.queue.push({s,resolve,reject})
            this.run();
        })
    }
    run(){
        while(this.running<this.max&&!this.queue.length){
            this.running++
            const {s,resolve,reject} = this.queue.shift()
            s().then(resolve).catch(reject).finally(()=>{this.running--})
        } 
    }
}


//
const scheduler = new Scheduler(2);
const timeout = (ms,vlaue)=>{
    new Promise((resolve)=>setTimeout(()=>resolve(value),m))
}
scheduler.add(() => timeout(1000, "A")).then(console.log);
scheduler.add(() => timeout(500, "B")).then(console.log);
scheduler.add(() => timeout(300, "C")).then(console.log);
scheduler.add(() => timeout(400, "D")).then(console.log);
// 输出顺序：B, C, A, D （并发数为2，按完成时间输出）