const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let T = 0
let inputs = []
let n = 0
let height = []
let length = []
rl.on('line', function (line) {
    T++
    inputs.push(line)
    if (T === 3) {
        n = Number(inputs[0].trim())
        height = inputs[1].split(' ')
        length = inputs[2].split(' ')
        console.log(n, height, length)
    }
})

function deal(n) {

}