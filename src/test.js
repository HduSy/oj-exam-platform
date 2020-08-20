let testArr = [-2, 1, -3, 4, -1, 2, 1, -5]

//错的很细微 dp定义搞清楚，绝对正确是整道题成功的关键。
function deal(arr) {
    if (!arr || arr.length < 1) return undefined
//    状态 选择 dp定义
    let dp = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        //我这里的dp定义并不连续
        if (dp[i - 1] < 0) {
            dp[i] = arr[i]
        } else {
            dp[i] = Math.max(dp[i - 1] + arr[i], dp[i - 1])
        }
    }
    console.log(dp)
    return Math.max(...dp)
}

// 正确
function deal(arr) {
    let pre = 0, maxNum = arr[0]
    arr.forEach(item => {
        // pre = Math.max(pre, pre + item) False!!!
        pre = Math.max(item, pre + item)
        maxNum = Math.max(pre, maxNum)
    })
    return maxNum
}

console.log(deal(testArr)) //正确为6
