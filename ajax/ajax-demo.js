const xhr = new XMLHttpRequest()
console.log('state: ', xhr.readyState)
xhr.open('GET', './data/test.json', true) // true是异步请求
console.log('state: ', xhr.readyState)

xhr.onreadystatechange = () => {
    console.log('state: ', xhr.readyState)
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.log('其他情况');
        }
    }
}

xhr.send(null)
console.log('state: ', xhr.readyState)


// post 请求
// xhr.open('POST', './login', false)
// const postData = {
//     userName: 'zhangsan',
//     password: 'xxx'
// }
// xhr.send(JSON.stringify(postData))
