//1. assign方法
var obj1 = {
    a: 1,
    b: 2,
}
var obj2 = Object.assign({}, obj1);

//2. 扩展运算符
var obj3 = {...obj1};

//3. 数组方法
let arr = [1, 2, 3];
let arr2 = arr.slice();

//4. 浅拷贝
function shallowCopy(obj){
    if(typeof obj !== "object" || obj === null){
        return obj;
    }
    let newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}