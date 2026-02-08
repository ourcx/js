//retry 实现-》失败就递归，次数减一
//超时控制 Promise.race([请求,超时promise])
//延迟的  setTimeout(() => {}, delay)

// 实现一个简单的retry函数，用于重试一个异步操作，直到成功或达到最大重试次数。
// 函数接受一个异步操作函数（asyncFn）、最大重试次数（maxRetries）和重试间隔（delay）作为参数。
// 异步操作函数返回一个Promise对象，当Promise状态为fulfilled时表示操作成功，当状态为rejected时表示操作失败。
// retry函数返回一个新的Promise对象，当异步操作成功时，新Promise状态为fulfilled，当失败且达到最大重试次数时，新Promise状态为rejected。

function retry(asyncFn, maxRetries = 3, delay = 1000) {
    return new Promise((resolve, reject) => { 
        async function attempt() {
            try {
                const result = await asyncFn();
                resolve(result);
            } catch (error) {
                if(maxRetries <= 0){
                    reject(error);
                }else{
                    setTimeout(() => {
                        attempt(maxRetries - 1, delay);
                    }, delay);
                }
            }
        }
    })
}

//基础的
function retry(fn,times){
    return fn().catch(err => {
        if(times <= 0){
            throw err;
        }
        return retry(fn, times - 1);
    })
}

// 带延迟的 retry
function retryWithDelay(fn,maxTimes,baseDelay=1000,attempt=0){
    return fn().catch(err => {
        if(attempt >= maxTimes){
            throw err;
        }
        const delay = baseDelay * Math.pow(2,attempt); //1s 2s 4s 8s
        return new Promise(resolve => {r=>setTimeout(r,delay)}).then(() => retryWithDelay(fn,maxTimes,baseDelay,attempt + 1))
    })
}

// 超时控制
function withTimeout(fn, timeout) {
    return Promise.race([
        fn(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
        //超过这个时间就进行报错
    ])
}
