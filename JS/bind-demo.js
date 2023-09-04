function fn1(a,b) {
    console.log(this);

    console.log(a,b)

    return 'this is fn1'
}

const fn2 = fn1.bind({x: 100}, 10 ,20)
const res = fn2()
console.log(res);

// const res2 = fn1(20, 30)
// console.log(res2);

// 手写bind函数,因为bind其实在Function.prototype上

Function.prototype.bind1 = function () {
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)

    // 获取this
    const t = args.shift()
    // fn1.bind() 中的fn1
    const self = this
    return function () {
        return self.apply(t, args)
    }
}

const fn3 = fn1.bind1({x: 100}, 10, 20)
const res2 = fn3()
console.log(res2)

