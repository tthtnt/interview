// async function async1() {
//     console.log('async1 start'); // 2
//     await async2()
//     // await 之后都可以看做是Callback里的内容，所以会放到Callback queue里面
//     console.log('async1 end'); // 5 最后执行Callback queue
// }

// async function async2() {
//     console.log('async2'); // 3
// }

// console.log('script start');  // 1
// async1()

// console.log('script end'); // 4 先执行同步


async function async1() {
    console.log('async1 start'); 
    await async2()
    console.log('async1 end');
    await async3()
    console.log('async1 and async2 end')
}

async function async2() {
    console.log('async2');
}

async function async3() {
    console.log('async3')
}

console.log('script start');
async1()

console.log('script end');