//嵌套对象转成扁平键值对
//递归


function flattenObj(obj,depth = Infinity){
    let res = {}

    const dfs = (item,prevKey,curDepth) => {
        if(!item || typeof item !== 'object'||curDepth<=0){
            res[prevKey] = item
            return
        }
        //基本类型就直接加上去了

        for (const [k, v] of Object.entries(item)) {
            const curKey = prevKey ? `${prevKey}.${k}` : k
            //如果是对象就递归
            if(typeof v === 'object'){
                dfs(v,curKey,curDepth-1)
            }else{
                //否则就加上去
                res[curKey] = v
            }
        }
    }
    dfs(obj,'',depth)
    return res
}

