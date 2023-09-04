/**
 * 
 * 深拷贝
 */

const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1);

obj2.address.city = 'shanghai'

console.log(obj1.address.city)


/**
 * 深拷贝
 * @param {Object} obj 
 * @returns 
 */
function deepClone (obj = {}) {
    // 判断对象是否为对象或数组
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }

    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    // 无论对象或数组都可以用for...in
    for (let key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}