//继承就是子类复用父类的属性和方法
//class 继承
//extends + super




//寄生组合继承
function Anima(name){
    this.name = name;
    this.colors = ['red', 'blue']
}
Animal.prototype.sayName = function() {
  console.log('My name is', this.name)
}

function Dog(name, age) {
    Animal.call(this, name);
    //继承属性
}
Object.setPrototypeOf(Dog.prototype,Anima.prototype)
Dog.prototype.constructor = Dog;
//---=
const dog = new Dog('Max')
dog.sayName()  // My name is Max
console.log(dog instanceof Animal)  // true



//es6继承
class Animal {
    constructor(name) {
        this.name = name
        this.colors = ['red', 'blue']
    }
    sayName() {
        console.log('My name is', this.name)
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}
const dog1 = new Dog('Max', 2)
dog1.sayName()



