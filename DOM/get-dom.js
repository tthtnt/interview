const div1 = document.getElementById('div1') // id
const divList = document.getElementsByTagName('div') // 集合

const containerList = document.getElementsByClassName('.container') // 集合

const pList = document.querySelectorAll('p') // 集合

p1 = pList[0]

p1.setAttribute('data-name', 'aaa')
console.log(p1.getAttribute('data-name'));
p1.setAttribute('style', 'font-size: 50px')
console.log(p1.getAttribute('style'));

console.log(p1.style);
console.log(p1.style.width);
console.log(p1.style.className);

console.log(p1.nodeName);
console.log(p1.nodeType);