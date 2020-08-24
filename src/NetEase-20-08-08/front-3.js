const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inputs = []
rl.on('line', function (line) {
    inputs = line.trim().split(' ').map(Number)
    console.log(deal(inputs))
    inputs.length = 0
})

/**
 * 二分法
 * 优先分配E&H，剩余EM+M+MH归为M并判断够不够sum场
 * @param arr
 * @returns {number}
 */
function deal(arr) {
    let [E, EM, M, MH, H] = arr
    let max_val = Math.floor((E + EM + M + MH + H) / 3)

    function find(num, E, EM, M, MH, H) {
        let cur
        if (E < num) {
            cur = Math.min(num - E, EM)
            E += cur
            EM -= cur
        }
        if (H < num) {
            cur = Math.min(num - H, MH)
            H += cur
            MH -= cur
        }
        if (EM + M + MH >= num && E >= num && H >= num) {
            return true
        } else {
            return false
        }
    }

    //left:至少场数;right:至多场数
    let [left, right] = [0, max_val]
    let sum, res = 0
    while (left <= right) {
        sum = Math.floor((left + right) / 2) //场数
        if (find(sum, E, EM, M, MH, H)) {
            left += 1
            res = Math.max(res, sum)
        } else {
            right -= 1
        }
    }
    return res
}
