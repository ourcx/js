//push
Array.prototype.push = function(){
    for(var i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
    }
    return this.length;
}


//filter
Array.prototype.filter = function(fn){
    if(typeof fn !== 'function'){
        throw new TypeError(fn + 'is not a function');
    }
    const res = []
    for(let i = 0;i< this.length; i++){
        fn(this[i])&&res.push(this[i]);
    }
    return res;
}


//map
Array.prototype.map = function(fn){
    if(typeof fn !== 'function'){
        throw new TypeError(fn + 'is not a function');
    }
    const res = []
    for(let i = 0;i< this.length; i++){
        res.push(fn(this[i]));
    }
    return res;
}


//reduce
Array.prototype.reduce = function(fn,initialValue){ 
    if(typeof fn !== 'function'){
        throw new TypeError(fn + 'is not a function');
    }
    let acc = initialValue;
    //初始值
    for(let i = 0;i< this.length; i++){
        acc = fn(acc,this[i]);
    }
    return acc;
}