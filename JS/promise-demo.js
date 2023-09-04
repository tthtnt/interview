const url = 'https://img1.mukewang.com/5333a2a10001064f02000200-100-100.jpg'

function loadImg(src) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => [
            resolve(img)
        ]
        img.onerror = () => {
            const err =  new Error(`图片加载失败 ${src}`)
            reject(err)
        }
        img.src = src
    })
}

loadImg(url).then(img => {
    console.log(img.width)
    return img
}).then(img => {
    console.log(img.height);
}).catch(err => console.log(err))



// setTimeout(() => {
//     console.log('a')
// }, 1000)

// alert('a')