// Q1: Pick 干嘛？
// → 从对象中选取指定属性
// → pick(obj, ['a', 'b']) → { a, b }
// Q2: Omit 干嘛？
// → 从对象中排除指定属性
// → omit(obj, ['a']) → 除了 a 的其他属性


function pick(obj, keys) {
    const keysSet = new Set(Array.isArray(keys) ? keys : [keys])
    return Object.keys(obj).reduce((acc, key) => {
        if (keysSet.has(key)) {
            acc[key] = obj[key]
        }
        return acc
    },{})

}


function omit(obj, keys) {
    const keysSet = new Set(Array.isArray(keys) ? keys : [keys])
    return Object.keys(obj).reduce((acc, key) => {
        if (!keysSet.has(key)) {
            acc[key] = obj[key]
        }
        return acc
    },{})
}