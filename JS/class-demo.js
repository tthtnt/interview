class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    sayHi() {
        console.log(`姓名：${this.name} 学号：${this.number}`);
    }
}


const xialuo = new Student('xialuo', '123');

console.log(xialuo.name, xialuo.number);

xialuo.sayHi()