// 不缓存DOM查询结果
for(let i = 0; i < document.getElementsByTagName(p).length; i++) {
    // 每次循环，都会计算length，频繁进行DOM查询
}


// 缓存DOM查询结果
const pList = document.getElementsByTagName('p')
const length = pList.length
for (let i = 0; i < length; i++) {
    // 缓存length 只进行一次DOM查询
}


const listNode = document.getElementById('list')

// 创建一个文档片段，此时还没有插入DOM树中
const frag = document.createDocumentFragment()

// 执行插入
for(let x = 0; x < 10; x++) {
    const li = document.createElement('li')
    li.innerHTML = 'list item ' + x
    frag.appendChild(li)
}

// 都完成之后，再整体插入到DOM树中
listNode.appendChild(frag)