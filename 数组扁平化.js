//递归
let arr = [1, [2, [3, [4, [5]]]]];
function flat(arr) {
    let res = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flat(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }
}

//非递归
function flat(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur)?flat(cur):cur);
    },[])
}

//扩展运算符
function flat(arr) {
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}

//转化成字符串会自动扁平化
function flat(arr) {
    return arr.toString().split(',')
}

//正则和 json
function flat(arr) {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g,'');
    return JSON.parse('['+str+']');
}

//控制深度
function flat(arr,dep=1) {
    if(dep <= 0){return arr;}
    let res = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flat(arr[i]),dep-1);
        }else{
            res.push(arr[i]);
        }
    }
}