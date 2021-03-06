import setting from './setting'
let canvas = document.querySelector('#canvas')

let ctx = canvas.getContext('2d')
canvas.width = setting.width
canvas.height = setting.height

// 用于查询数组中是否包含某元素
function indexOf(arr, targetVal) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i][0] === targetVal[0] && arr[i][1] === targetVal[1]) {
            return i
        }
    }
    return -1
}

export {
    ctx,
    indexOf
}