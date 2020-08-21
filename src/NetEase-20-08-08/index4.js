const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let person = 0
let inputs = []
let gx = 0
rl.on('line', function (line) {
    if (person === 0) {
        [person, gx] = line.split(' ').map(Number)
    } else {
        inputs.push(line)
        if (inputs.length === gx) {
            deal(inputs)

            person = 0
            inputs.length = 0
        }
    }
})

function deal(arr) {
    // [ '1 3', '2 1', '3 2', '3 5', '4 5', '5 4' ]
    let len = arr.length
    let res = 0
    let map = {}

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i][0] === arr[j][2] ) {
                map[arr[j][0] + arr[i][2]] = true
            }
            if (arr[i][2] === arr[j][0] ) {
                map[arr[i][0] + arr[j][2]] = true
            }
        }
    }
    console.log(map)
    let keyArr = Object.keys(map)
    for(let i = 0;i<keyArr.length;i++){
        for(let j = 0;j<keyArr.length;j++){
            // if ()
        }
    }
    console.log(res)
}