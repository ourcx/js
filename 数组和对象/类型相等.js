// Q1: 什么时候返回 true？
// → 基本类型：值相等
// → 引用类型：结构和值都相等
// Q2: 怎么判断类型？
// → Object.prototype.toString.call() 精确判断
// Q3: 递归终止条件？
// → === 相等（包括同一引用）
// → null/undefined
// → 类型不同
// Q4: 特殊类型怎么比？
// → Date: 比较 getTime()
// → RegExp: 比较 toString()
// → 数组: 长度 + 逐个递归
// → 对象: 键数量 + 逐个递归



function deepEqual(a, b) {
    //基本类型和通义引用
    if (a === b) {
        return true
    }
    //null 或非对象
    if(a == null || b == null || typeof a !== "object" || typeof b !== "object") return false

    //精确判断
    const type1 = Object.prototype.toString.call(obj1)
    const type2 = Object.prototype.toString.call(obj2)
    if (type1 !== type2) return false

    //特殊对象 时间
    if(a instanceof Date) return a.getTme() === b.getTime();
    if(a instanceof RegExp) return a.toString() === b.toString();

    if(Array.isArray(a) && Array.isArray(b)){
        if(a.length !== b.length) return false
        for(let i = 0; i < a.length; i++){
            if(!deepEqual(a[i], b[i])) return false
        }
        return true
    }

    //对象深比较
    const keys1 = Object.keys(a)
    const keys2 = Object.keys(b)
    if(keys1.length !== keys2.length) return false
    for(let key of keys1){
        if(!keys2.includes(key) || !deepEqual(a[key], b[key])) return false
    }
    return true
}

//判断两个东西是否相等

