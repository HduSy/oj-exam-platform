const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let n = 0, m = 0, compacity = [], comsumer = []
rl.on('line', function (line) {
    if (n === 0 || m === 0) {
        [n, m] = line.trim().split(' ').map(Number)
    } else {
        if (compacity.length === 0) {
            compacity = line.trim().split(' ').map(Number)
        } else {
            comsumer.push(line.split(' ').map(Number))
            if (comsumer.length === m) {
                //处理部分
                console.log(deal(compacity))
                n = 0
                m = 0
                compacity.length = 0
                comsumer.length = 0
            }
        }
    }
})

function deal(arr) {
    let sum = 0
    let select = []
    let max
    let c
    for (let i = 0; i < n; i++) {
        c = compacity[i]
        max = 0
        for (let j = 0; j < m; j++) {
            let people = comsumer[j][0]
            let money = comsumer[j][1]
            select.push(money)
            if (people <= c && max < money) {
                max = money
            }
        }
        let mI = select.findIndex(item => item === max)
        comsumer[mI][1] = -Infinity
        sum += max
    }
    return sum
}
