const dateFormat = (dateInput,format) => { 
    var day = dateInput.getDate();
    var month = dateInput.getMonth() + 1;
    var year = dateInput.getFullYear();
    var hour = dateInput.getHours();
    var minute = dateInput.getMinutes();
    var second = dateInput.getSeconds();
    return format.replace("YYYY",year).replace("MM",month).replace("DD",day).replace("HH",hour).replace("mm",minute).replace("ss",second);
    //用replace方法替换格式化字符串中的占位符
}