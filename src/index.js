const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let T = 0
let inputs = []
rl.on('line', function (line) {
    if (T === 0) {
        T = parseInt(line.trim())
    } else {
        inputs.push(line)
        if (inputs.length === T) {
            //处理代码
            for (let i = 0; i < T; i++) {
                deal(inputs[i].split(' ').map(Number))
            }
            //重新初始化
            T = 0
            inputs.length = 0
        }
    }
})

function deal(arr) {
    console.log(arr.reduce((pre, cur) => pre + cur))
}