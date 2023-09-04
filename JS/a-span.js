let a;
for (let i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function(e) {
        e.preventDefault();
        alert(i)
    })
    document.body.appendChild(a);
}



// 作用域
// 表示一个变量的合法使用范围
let b = 0;
function fn1() {
    let b1 = 100

    function fn2() {
        let b2 = 200
        function fn3 () {
            let b3 = 300
            return a + a1 + a2 + a3
        }
    }
}