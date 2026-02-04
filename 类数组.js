Array.prototype.slice.call(arrayLike);

Array.prototype.splice.call(arrayLike, 0);

Array.prototype.concat.apply([], arrayLike);

Array.from(arrayLike);

//就是吧类数组转换为数组，用这些方法去执行了一遍