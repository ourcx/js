//防抖节流
export function debounce(func, wait) {
    let timeout;
    return function() {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func.apply(this, arguments);
        }, wait);
    }
}
export function throttle(func, wait) {
    let lastTime = 0;
    return function() {
        let nowTime = Date.now();
        if (nowTime - lastTime > wait) {
            func.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}