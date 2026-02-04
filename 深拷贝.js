//1. JSON.stringify()和JSON.parse()
var obj1 = {
    a: 1,
    b: 2,
}
var obj2 = JSON.parse(JSON.stringify(obj1));


//2. 递归
function deepClone(obj) {
    if(typeof obj !== "object" || obj === null){
        return obj;
    }
    let newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            typeof obj[key] === "object" ? newObj[key] = deepClone(obj[key]) : newObj[key] = obj[key];
            //是对象就在深度遍历一下
        }
    }
}