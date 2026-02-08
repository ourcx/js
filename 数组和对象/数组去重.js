//set
let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let newArr = [...new Set(arr)];
console.log(newArr);


//map
function flat(arr) {
    let map = new Map();
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],true);
            res.push(arr[i]);
        }
    }
    return res;
}
