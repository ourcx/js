//sleep使用 promise 和 setTimeout 实现

function sleep(ms){
    return new Promise((r=>setTimeout(r,ms)))
}

function sleep2(ms){
    const start = Date.now()
    while (Date.now()-start<ms){}
}