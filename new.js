//new
function MyNew(constructor, ...args) {
    let obj = Object.create(constructor.prototype);
    let res = constructor.apply(obj, args);
    return res instanceof Object ? res : obj;
}