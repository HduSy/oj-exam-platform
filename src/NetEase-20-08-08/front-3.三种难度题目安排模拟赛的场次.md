## 安排模拟赛
>有三种难度的题目,难度分别为Easy,Medium,Hard。现在你总共有E+EM+M+MH+H道题,各个字符串的含义如下：

1. E表示有E道题目难度为Easy
2. EM表示有EM道题目难度可以为Easy或Medium
3. M表示有M道题目难度为Medium
4. MH表示有MH道题目难度可以为Medium或Hard
5. H表示有H道题目难度为Hard
>你要用这些题目出尽量多的模拟赛,为了保证题目质量且含有一定的区分度,每场模拟赛需要包含Easy,Medium,Hard三种难度的题目各一道,求你最多能出多少场模拟赛
---
输入描述:一行五个整数E, EM, M, MH, H
```
0<=E + EM + M + M H + H <=10^18
```
输出描述:一行一个数字表示答案
```
输入:2 2 1 2 2
输出:3
```
输出说明：E + EM + H、E + MH + H、EM + M + MH

代码：
```javascript
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inputs = []
rl.on('line', function (line) {
    inputs = line.trim().split(' ').map(Number)
    console.log(deal(inputs))
    inputs.length = 0
})

/**
 * 二分法
 * 优先分配E&H，剩余EM+M+MH归为M并判断够不够sum场
 * @param arr
 * @returns {number}
 */
function deal(arr) {
    let [E, EM, M, MH, H] = arr
    let max_val = Math.floor((E + EM + M + MH + H) / 3)

    function find(num, E, EM, M, MH, H) {
        let cur
        if (E < num) {
            cur = Math.min(num - E, EM)
            E += cur
            EM -= cur
        }
        if (H < num) {
            cur = Math.min(num - H, MH)
            H += cur
            MH -= cur
        }
        if (EM + M + MH >= num && E >= num && H >= num) {
            return true
        } else {
            return false
        }
    }

    //left:至少场数;right:至多场数
    let [left, right] = [0, max_val]
    let sum, res = 0
    while (left <= right) {
        sum = Math.floor((left + right) / 2) //场数
        if (find(sum, E, EM, M, MH, H)) {
            left += 1
            res = Math.max(res, sum)
        } else {
            right -= 1
        }
    }
    return res
}

```
