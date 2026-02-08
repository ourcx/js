Function.prototype.myCall =function call(context=window) {
    if(typeof this !== 'function'){
        throw new TypeError('Error')
    }
    let obj = context;
    obj.fn = this;
    const args = [...arguments].slice(1);
    let res = obj.fn(...args);
    delete obj.fn;
    return res;
}

Function.prototype.myApply =function apply(context=window) {
    if(typeof this !== 'function'){
        throw new TypeError('Error')
    }
    const obj = context;
    obj.fn = this;
    const args = arguments[1];
    //不用转化数组
    let res = obj.fn(...args);
    delete obj.fn;
    return res;
}


Function.prototype.myBind = function bind(context=window) {
    var fn = this;
    return function(...innerArgs) {
        return fn.apply(context, [...innerArgs]);
    }
}