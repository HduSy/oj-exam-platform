## 素数分解
>输入一组正整数,求解最多可以分解为几个素数

输入：
```
3  5  7
```
输出：
```
6
```
输出描述：因为3不能再分,5可以分为2+3,7可以分为2+2+3,一共6个

思路：最小素数为2,如果一个数是偶数则全部分解为2,奇数时分解为3+剩余的2

代码：
```javascript
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

```
