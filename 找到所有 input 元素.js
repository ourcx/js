function findInputs(element) {
    const rec = function (element,arr) {
        if(element.nodeName.toUpperCase === 'INPUT'){
            arr.push(element);
        }
        let children = element.children;
        for(let i = 0; i < children.length; i++){
            rec(children[i], arr);
        }
        return arr;
    }
    return rec(element, []);
}