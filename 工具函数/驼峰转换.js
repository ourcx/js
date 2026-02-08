function toCamelCase(str) {
    const separator = str.includes('-') ? '-' : '_';
    return str.split(separator).map((item, index) => {
        return index > 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item;
    }).join('')
}

//下划线转驼峰

// 驼峰转下划线
function toUnderline(str) {
    let res = '';
    for(const item of str){
        if(item >= 'A' && item <= 'Z'){
            res += '_' + item.toLowerCase();
        }else{
            res += item;
        }
    }
    return res;
}