/**
 * @description myPromise
 * @author sijieLiu
 */

class MyPromise {
    // promise 状态
    state = 'pending' // pending fulfilled rejected
    value = undefined
    reason = undefined

    resolveCallbacks = [] // pending状态下，存储成功的回调
    rejectCallbacks = [] // pending状态下，存储失败的回调

    constructor(fn) {
        const resolveHandler = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.resolveCallbacks.forEach(fn => fn(this.value))
            }
        }

        const rejectHandler = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.rejectCallbacks.forEach(fn => fn(this.reason))
            }
        }

        try {
            fn(resolveHandler, rejectHandler)
        } catch (err) {
            rejectHandler(err)
        }
    }

    then(fn1, fn2) {
        fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
        fn2 = typeof fn2 === 'function' ? fn2 : (err) => err

        if (this.state === 'pending') {
            // 如果是pending肯定是还没有结果返回 所以要先把fn1 和 fn2放入队列
            const p1 = new MyPromise((resolve, reject) => {
                this.resolveCallbacks.push(() => {
                    try {
                        const newValue = fn1(this.value)
                        resolve(newValue)
                    } catch (err) {
                        reject(err)
                    }
                })

                this.rejectCallbacks.push(() => {
                    try {
                        const newReason = fn2(this.reason)
                        reject(newReason)
                    } catch (err) {
                        reject(err)
                    }
                })
            })
            return p1
        }

        if (this.state === 'fulfilled') {
            const p1 = new MyPromise((resolve, reject) => {
                try {
                    const newValue = fn1(this.value)
                    resolve(newValue)
                } catch (err) {
                    reject(err)
                }
            })
            return p1
        }

        if (this.state === 'rejected') {
            const p1 = new MyPromise((resolve, reject) => {
                try {
                    const newReason = fn2(this.reason)
                    reject(newReason)
                } catch (err) {
                    reject(err)
                }
            })
            return p1
        }
    }
    // catch 就是 then的一个语法糖，简单模式
    catch(fn) {
        return this.then(null, fn)
    }
}

MyPromise.resolve = function (value) {
    return new MyPromise((resolve, reject) => resolve(value))
}

MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => reject(reason))
}

MyPromise.all = function (promiseList = []) {
    const p1 = new MyPromise((resolve, reject) => {
        const result = []
        const length = promiseList.length
        let resultCount = 0

        promiseList.forEach(p => {
            p.then(data => {
                result.push(data)
                resultCount++

                if (resultCount === length) {
                    resolve(result)
                }
            }).catch (err => {
                reject(err)
            }) 
        })
    })
    return p1
}

MyPromise.race = function (promiseList = []) {
    let resolved = false
    const p1 = new MyPromise((resolve, reject) => {
        promiseList.forEach(p => {
            p.then(data => {
                if (!resolved) {
                    resolve(data)
                    resolved = true
                }
            }).catch (err => {
                reject(err)
            })
        })
    })
    return p1
}










const p1 = new MyPromise((resolve, reject) => {
    // resolve(100)
    setTimeout(() => {
        // reject(100)
        resolve(100)
    },500)
})

console.log('p1: ', p1);

const p11 = p1.then(data => {
    console.log('data1: ', data)
    return data + 1
})

const p12 = p11.then(data => {
    console.log('data2: ', data)
    return data + 2
})

const p13 = p12.catch(err => console.error(err))

const p2 = MyPromise.resolve(200)
console.log('p2: ', p2)

const p3 = MyPromise.reject('错误信息...')

console.log('p3: ', p3)

const p4 = MyPromise.all([p1,p2,p3]) // 传入一个数组Promise 必须所有都fulfilled才返回

const p5 = MyPromise.race([p1, p3]) // 传入一个数组Promise 只要有一个fulfilled就返回
