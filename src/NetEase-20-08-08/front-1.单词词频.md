## 单词词频
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
        n = parseInt(line.trim())
    } else {
        inputs.push(line)
        if (inputs.length === n) {
            deal(inputs)
            n = 0
            inputs.length = 0
        }
    }
})

function deal(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        if (map[word] >= 1) {
            map[word] += 1
        } else {
            map[word] = 1
        }
    }
    let res = 0
    for (let key in map) {
        if (map[key] / n >= 0.1) {
            res++
        }
    }
    console.log(res)
}

```
