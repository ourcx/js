//typeof
console.log(typeof 123);
if(typeof 123 === 'number'){
    console.log('123是数字');
}


//instanceof
console.log(123 instanceof Number);
if(123 instanceof Number){
    console.log('123是Number对象');
}

//Object.prototype.toString.call()
console.log(Object.prototype.toString.call(123));
if(Object.prototype.toString.call(123) === '[object Number]'){
    console.log('123是Number对象');
}

//Object.prototype.toString.call()
console.log(Object.prototype.toString.call('123'));
if(Object.prototype.toString.call('123') === '[object String]'){
    console.log('123是字符串');
}

//s手写函数判断
function getType(value){
    if(value === null){
        return value + '';
    }
    if(typeof value === 'object'){
        let valueClass = Object.prototype.toString.call(value),
        type = valueClass.split(' ')[1].split('');
        type.pop();
        return type.join('').toLowerCase();
    }else{
        return typeof value;
    }
}