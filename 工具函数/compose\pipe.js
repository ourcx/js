const compose = (...fns)=>(x)=>fns.reduceRight((y,f)=>f(y),x)


const pipe = (...fns)=>(x)=>fns.reduce((y,f)=>f(y),x)

// 测试
const add1 = x => x + 1
const mul2 = x => x * 2
const square = x => x * x

console.log(compose(add1, mul2, square)(2))  // (2^2 * 2) + 1 = 9
console.log(pipe(square, mul2, add1)(2))     // (2^2 * 2) + 1 = 9