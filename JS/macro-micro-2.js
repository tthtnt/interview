const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')

$('#container')
    .append($p1)
    .append($p2)
    .append($p3)

// console.log('length', $('#container').children().length);
// alert('阻断')

// 微任务 DOM渲染前
Promise.resolve().then(() => {
    console.log('length1', $('#container').children().length);
    alert('Promise then')
})
// 宏任务 DOM渲染后出发

setTimeout(() => {
    console.log('length2', $('#container').children().length);
    alert('setTimeout')
})