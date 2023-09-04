// 父类
class People {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eat something`);
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name);
        this.number = number;
    }
    sayHi() {
        console.log(`姓名：${this.name} 学号：${this.number}`);
    }
}

// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
    teach() {
        console.log(`姓名：${this.name} 课程：${this.major}`); 
    }
}

const xialuo = new Student('xialuo', 123)
const teacherWang = new Teacher('laowang', '语文')

xialuo.sayHi()
xialuo.eat()

teacherWang.teach()
teacherWang.eat()

console.log(typeof People);


// 隐式原型和显示原型
console.log(xialuo.__proto__);
console.log(Student.prototype);
console.log(xialuo.__proto__ === Student.prototype)
console.log(Student.prototype.__proto__ === People.prototype);