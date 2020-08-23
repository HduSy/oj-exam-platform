const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0
let inputs = []
rl.on('line', function (line) {
    if (n === 0) {
        n = Number(line.trim())
    } else {
        inputs = line.split(' ').map(Number)
        deal(inputs)
        n = 0
        inputs.length = 0
    }
})

function deal(arr) {
    let res = 0
    if (!arr || arr.length < 1) return []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) continue
        if (arr[i] === 2) {
            res += 1
            continue
        }
        if (arr[i] % 2 === 0) {
            res += arr[i] / 2
        } else {
            res += (arr[i] - 1) / 2
        }
    }
    console.log(res)
    return res
}
