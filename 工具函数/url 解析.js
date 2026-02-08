// Q1: 解析什么？
// → ?a=1&b=2 → { a: '1', b: '2' }
// → 支持重复 key 转数组、中文解码、无值 key 为 true
// Q2: 怎么处理？
// → split('?') 取参数部分
// → split('&') 分割每个参数
// → split('=') 分割 key 和 value

function parseQUery(url) {
    const query = url.split('?')[1];
    if (!query) return
    
    const params = query.split('&');
    const res = {};

    params.forEach(element => {
        const [key, value] = element.split('=');
        //无值的 key 为 true
        value = value?decodeURIComponent(value):true;

        if(value !== true){
            value = isNaN(value)?value:+value;
        }
        //重复的 key 转数组
        if(!res.hasOwnProperty(key)){
            res[key] = [value];
        }else{
            res[key] = [].concat(res[key], value);
        }
    });
    return res;
}