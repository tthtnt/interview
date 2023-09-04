function fn1() {
    console.log(this)
}

fn1()
// call直接调用就执行
fn1.call({x: 100})
// bind会返回一个新的函数
const fn2 = fn1.bind({x: 200})

fn2()

const zhangsan = {
    name: '张三',
    sayHi() {
        console.log(this);
    },
    wait() {
        setTimeout(function() {
            console.log(this);
        })
    }
}

zhangsan.sayHi()
zhangsan.wait()

const lisi = {
    name: '李四',
    sayHi() {
        console.log(this);
    },
    wait() {
        // 箭头函数的this取它上级作用域的this
        setTimeout(() => {
            console.log(this);
        })
    }
}

lisi.sayHi()
lisi.wait()

class People {
    constructor(name) {
        this.name = name;
        this.age = 20
    }

    sayHi() {
        console.log(this);
    }
}

const wangwu = new People('王五')
wangwu.sayHi();