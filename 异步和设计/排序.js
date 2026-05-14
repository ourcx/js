

let arr = [1, 3, 2, 5, 4,9,6];



//冒泡排序
function bubbleSort(arr) {
    let len = arr.length;
    if(!len)return [];
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
        console.log(`第${i+1}次循环`,arr);
    }
    return arr
}


//选择排序
function selectSort(arr) {
    let len = arr.length,maxIndex;
    for(let i = 0; i < len; i++){
        maxIndex = i;
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[maxIndex]){
                maxIndex = j;
            }
        }
        [arr[i],arr[maxIndex]] = [arr[maxIndex],arr[i]];
        console.log(`第${i+1}次循环`,arr);
    }
    return arr;
}


//插入排序
function insertSort(arr) {
    let len = arr.length,preIndex,current;
    for(let i = 1; i < len; i++){
        preIndex = i-1;
        //前一个东西
        current = arr[i];
        //当前
        while(preIndex >= 0 && arr[preIndex] > current){
            //如果前一个大于当前
            //就交换两个人的顺序
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
            //继续向前找，知道小于当前
        }
        arr[preIndex+1] = current;
        console.log(`第${i}次循环`,arr);
    }
    return arr;
}


//希尔排序
function shellSort(arr) {
    let len = arr.length,gap = Math.floor(len/2);

    while(gap > 0){ 
        for(let i = gap; i < len; i++){
            for(let j = i - gap; j >= 0; j-=gap){
                if(arr[j] > arr[j+gap]){
                    [arr[j],arr[j+gap]] = [arr[j+gap],arr[j]];
                }else{
                    break;
                }
            }
        }
        console.log(`第${len/gap}次循环`,arr);
        gap = Math.floor(gap/2);
    }
    return arr;
}


//归并排序
function mergeSort(arr) { 
    let len = arr.length;

    if(len < 2){
        return arr;
    }
    let middle = Math.floor(len/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    let result = [];
    while (left.length && right.length) {
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return [...result,...left,...right];
}

//快速排序
function quickSort(arr,begin,end) {
    if (begin > end) return arr;
        let temp = arr[begin],
            i = begin,
            j = end;
    while (i < j) {
        while (arr[j] >= temp && i < j) {
            j--;
        }
        while(arr[i] <= temp && j > i) {
            i++;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[begin], arr[i]] = [arr[i], arr[begin]];
    console.log(`${arr[i]}作为基准点：`, arr);
    this.quickSort(arr, begin, i - 1);
    this.quickSort(arr, i + 1, end);
    return arr;
}

//堆排序
function heapSort(arr) { 
    buildHeap(arr);
    for(let i = arr.length-1; i > 0; i--){
        [arr[0],arr[i]] = [arr[i],arr[0]];
        adjustHeap(arr,0,i);
        console.log(`第${arr.length-i}次循环`,arr);
    }
    return arr;
}

function buildHeap(arr) { 
    let start = Math.floor(arr.length/2)-1;
    let size = arr.length;
    for(let i = start; i >= 0; i--){
        adjustHeap(arr,i,size);
    }
}

function adjustHeap(arr,i,size) { 
    while(true){
        let max = i
        let left = i*2+1;
        let right = i*2+2;
        if(left < size && arr[left] > arr[max])max = left;
        if(right < size && arr[right] > arr[max])max = right;
        //左右节点大于当前节点就去交换，并再循环一遍判断交换后的左右节点位置是否破坏了堆结构
        if(max != i){
            [arr[i],arr[max]] = [arr[max],arr[i]];
            i = max;
        }
        else{
            return;
        }
    }
}
    //主要是建立堆，这个对象太难了


//计数排序