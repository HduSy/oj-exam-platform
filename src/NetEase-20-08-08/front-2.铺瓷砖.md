## 铺瓷砖
>牛牛有一块"2&times;n"的空白瓷砖并且有足够多的"1&times;2"和"2&times;3"两种类型
>的地毯(地毯可以旋转).现在他想在满足以下条件:地毯之间不能相互重叠地毯不能铺出瓷砖外
>以及不能有空隙下铺满整个瓷砖问你共有多少种不同的方案并且结果模上10007输出.
---
输入描述:第一行输入一个正整数T.表示有T组数据.接下来T行,每行输入一个正整数n.
```
1<= T <= 100
1<= n <= 100000
```
输出描述:输出T行，每一行对应每组数据的输出.
```
输入:
4
1
2
3
5
输出:
1
2
4
13
```
代码：
```javascript
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
```
