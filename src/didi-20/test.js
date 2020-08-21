//100% AC
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let n = 0
rl.on('line', function (line) {
    n = Number(line.trim())
    deal(n)
})

/**
 * a\b\c:0-9
 * a!=0
 * a!==b!==c
 * abc!==acc
 * abc+acc==n
 * abc:102-987
 * acc:100-988
 * @param n
 */
function deal(n) {
    //f (n < 202 || n > 2000) return 0
    let abcArr = getABC()
    let accArr = getACC()
    let abcL = abcArr.length
    let accL = accArr.length
    let num = 0
    let res = []
    for (let i = 0; i < abcL; i++) {
        let rest = n - abcArr[i]
        //if (rest<100) return 0
        if (accArr.indexOf(rest) !== -1) {
            num++
            res.push([abcArr[i], rest])
        }
    }
    console.log(num)
    for (let i = 0; i < res.length; i++) {
        //console.log(res[i])
        console.log(res[i][0] + ' ' + res[i][1])
    }
}

function getABC() {
    let a, b, c
    let res = []
    for (let i = 102; i < 988; i++) {
        let str = i.toString();
        [a, b, c] = str.split('').map(Number)
        if (a !== b && b !== c && a !== c) {
            res.push(i)
        }
    }
    return res
}

function getACC() {
    let a, b, c
    let res = []
    for (let i = 100; i < 989; i++) {
        let str = i.toString();
        [a, b, c] = str.split('').map(Number)
        if (a !== b && b === c) {
            res.push(i)
        }
    }
    return res
}
