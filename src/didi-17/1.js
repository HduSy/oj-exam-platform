const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let n = 0, arr = []
rl.on('line', function (line) {
    if (n === 0) {
        n = Number(line.trim())
    } else {
        arr = line.trim().split(' ').map(Number)
        console.log(deal(arr))
        n = 0
        arr.length = 0
    }
})

//https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/
/**
 * 定义dp为到第i个元素为止，前面的连续元素和
 * 单独成为一段还是加入n-1那段
 * @param arr
 * @returns {*}
 */
function deal(arr) {
    let pre = 0, maxNum = arr[0]
    arr.forEach(item => {
        // pre = Math.max(pre, pre + item) False!!!
        pre = Math.max(item, pre + item)
        maxNum = Math.max(pre, maxNum)
    })
    return maxNum
}

//
// function deal(arr) {
//     let sum = 0
//     let maxNum = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         if (sum > maxNum) {
//             maxNum = sum
//         }
//         if (sum < 0) {
//             sum = 0
//         }
//     }
//     return maxNum
// }
