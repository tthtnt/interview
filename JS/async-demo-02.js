// async function fn1() {
//     // return 100
//     return Promise.resolve(200)
// }

// const res1 = fn1()

// console.log('res1: ', res1); // Promise

// (async function () {
//     const p1 = Promise.resolve(300)
//     const data = await p1
//     console.log('data: ', data); // 300
// })()

// (async function () {
//     const data = await 400 // await Promise.resolve(400)    
//     console.log('data: ', data); // 400
// })()

// (async function () {
//     const data = await fn1()
//     console.log('data: ', data); // 400
// })()

// (async function () {
//     const p4 = Promise.reject('err')
//     try {
//         const res = await p4
//     } catch (ex) {
//         console.error(ex);
//     }
// })()

(async function () {
    const p4 = Promise.reject('err') // reject 状态
    const res = await p4  // await -> then 所以不会执行
    console.log(res);
})()