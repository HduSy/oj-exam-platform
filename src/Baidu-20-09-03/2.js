const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let T = 0
let lineNum = 0
let inputs = []
let m = 0, n = 0
rl.on('line', function (line) {
    if (T === 0) {
        T = Number(line.trim())
    } else {
        inputs.push(line.trim().split(' ').map(Number))
        lineNum++
        if (lineNum === 3) {
            deal(inputs)
            lineNum = 0
            inputs.length = 0
            T--
        }
    }
})

function deal(input) {
    // console.log(input);
    [m, n] = input[0]
    let res = new Array(m).fill(-1)
    let hope = input[1]
    let val = input[2]
    let tmp = [...input[2]]
    tmp.sort((a, b) => a - b)
    for (let i = 0; i < hope.length; i++) {
        for (let j = 0; j < tmp.length; j++) {
            if (hope[i] < tmp[j]) {
                let index = val.indexOf(tmp[j])
                res[i] = index + 1
                val[index] = -1
                tmp[j] = -1
                break
            } else {
                res[i] = -1
            }
        }
    }
    console.log(res.join(' '))
}

// 1
// 3 6
// 33 66 99
// 30 3 6 9 60 90