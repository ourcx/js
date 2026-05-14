// proxy 是一个构造函数

// 1. 目标对象 target，希望代理的对象
// 2. 处理器对象，包括拦截和修改操作的对象

class MyProxy {
    constructor(target, handler) {
        this.target = target;
        this.handler = handler; //处理器对象
    }
    get(property) {
        if (this.handler.get) {
            return this.handler.get(this.target, property, this)
        }
        return this.target[property]
    }
    set(property, value) {
        if (this.handler.set) {
            return this.handler.set(this.target, property, value, this)
        }
        this.target[property] = value
        return true
    }
    deleteProperty(property) {
        if (this.handler.deleteProperty) {
            return this.handler.deleteProperty(this.target, property, this);
        }
        delete this.target[property];  // 默认行为
        return true;
    }
    // 拦截对象的判断操作（has）
    has(property) {
        if (this.handler.has) {
            return this.handler.has(this.target, property, this);
        }
        return property in this.target;  // 默认行为
    }

    // 拦截对象的函数调用操作（apply）
    apply(...args) {
        if (this.handler.apply) {
            return this.handler.apply(this.target, args);
        }
        return this.target(...args);  // 默认行为
    }
}


// 目标对象
const target = {
  message: 'Hello, Proxy!'
};

// 处理器对象
const handler = {
  get(target, prop, receiver) {
    console.log(`Getting property: ${prop}`);
    return prop in target ? target[prop] : 'Property not found';
  },
  set(target, prop, value, receiver) {
    console.log(`Setting property: ${prop} to ${value}`);
    target[prop] = value;
    return true;
  },
  deleteProperty(target, prop) {
    console.log(`Deleting property: ${prop}`);
    delete target[prop];
    return true;
  },
  has(target, prop) {
    console.log(`Checking if property exists: ${prop}`);
    return prop in target;
  },
  apply(target, args) {
    console.log(`Function called with arguments: ${args}`);
    return target(...args);
  }
};

// 创建 Proxy 实例
const proxy = new MyProxy(target, handler);
