
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn){
    var self = this;
    this.state = PENDING;
    this.value = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    function resolve(value){
        if(value instanceof MyPromise){
            return value.then(resolve, reject);
        }
        //传入的value不是promise对象，直接改变状态为resolved
        setTimeout(() => {
            if(self.state === PENDING){
                self.state = RESOLVED;
                self.value = value;
                self.resolvedCallbacks.forEach(fn => fn(self.value));
            }
        },0)
    }

    function reject(reason){
        setTimeout(() => {
            if(self.state === PENDING){
                self.state = REJECTED;
                self.value = reason;
                self.rejectedCallbacks.forEach(fn => fn(self.value));
            }
            
        },0)
    }
    try{
        fn(resolve, reject);
    }catch(error){
        reject(error);
    }
}

MyPromise.prototype.then = function(onResolved, onRejected){
    //先判断有没有传入两个处理的函数
    onResolved = typeof onResolved === "function" ? onResolved : value => value;
    onRejected = typeof onRejected === "function" ? onRejected : reason => { throw reason };

    //如果是等待的阶段，就加入 callback数组中，等状态改变时，再执行
    if(self.state === PENDING){
        self.resolvedCallbacks.push(onResolved);
        self.rejectedCallbacks.push(onRejected);
    }
    if(self.state === RESOLVED){
        setTimeout(() => {
            onResolved(self.value);
        },0)
    }
    if(self.state === REJECTED){
        setTimeout(() => {
            onRejected(self.value);
        },0)
    }
}

MyPromise.prototype.catch = function(onRejected){
    return this.then(null, onRejected);
}
MyPromise.prototype.finally = function(cb){
    return this.then(cb, cb);
}
MyPromise.prototype.all = function(promises){ 
    if(!Array.isArray(promises)){
        throw new TypeError("arguments must be an array");
    }else{
        return new MyPromise((resolve, reject) => {
            var count = 0;
            var result = [];
            promises.forEach((promise, index) => {
                promise.then(value => {
                    count++;
                    result[index] = value;
                    if(count === promises.length){
                        resolve(result);
                    }
                }, reject);
            })
        })
    }
}

MyPromise.prototype.race = function(promises){
    if(!Array.isArray(promises)){
        throw new TypeError("arguments must be an array");
    }else{
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(resolve, reject);
            })
        })
    }
}

MyPromise.prototype.allSettled = function(promises){
    if(!Array.isArray(promises)){
        throw new TypeError("arguments must be an array");
    }else{
        return new MyPromise((resolve, reject) => {
            var count = 0;
            var result = [];
            promises.forEach((promise, index) => {
                promise.then(value => {
                    count++;
                    result[index] = {status: RESOLVED, value};
                    if(count === promises.length){
                        resolve(result);
                    }
                }, reason => {
                    count++;
                    result[index] = {status: REJECTED, reason};
                    if(count === promises.length){
                        resolve(result);
                    }
                });
            })
        })
    }
}


