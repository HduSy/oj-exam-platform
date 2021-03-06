// 铺瓷砖 DP 画图便知
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let T = 0
let inputs = []

rl.on('line', function (line) {
    if (T === 0) {
        T = Number(line.trim())
    } else {
        inputs.push(Number(line.trim()))
        if (inputs.length === T) {
            deal(inputs)
            T = 0
            inputs.length = 0
        }
    }
})

function deal(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        res.push(process(n))
    }
    for (let i = 0; i < res.length; i++) {
        console.log(res[i])
    }

    function process(n) {
        let dp = [1, 2, 4]
        if (n === 1) return dp[0]
        if (n === 2) return dp[1]
        if (n === 3) return dp[2]
        for (let i = 3; i < n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
        }
        return dp[n - 1]
    }
}
