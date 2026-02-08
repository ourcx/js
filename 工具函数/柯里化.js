//粗暴版
function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}



//参数固定
function add(a, b){
    return function(c){
        return a + b + c;
    }
}

//灵活使用
function add(...args){
    return args.reduce((a,b)=>a+b)
}

function currying(fn){
    let args = [];
    return function temp(...newArgs){
        if(newArgs.length){
            args = [
                ...args,
                ...newArgs
            ]
            return temp;
        }else{
            let val = fn.apply(this, args);
            args = [];
            return val;
        }
    }
}
let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15