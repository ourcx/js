//new
function MyNew(constructor, ...args) {
    let obj = Object.create(constructor.prototype);//创建一个新对象，继承构造函数的原型
    //let obj = {};
    //obj.__proto__ = constructor.prototype;
    //实例对象的__proto__指向构造函数的原型
    //let obj = Object.setPrototypeOf({}, constructor.prototype);
    
    let res = constructor.apply(obj, args);
    return res instanceof Object ? res : obj;
}