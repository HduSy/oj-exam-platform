// 铺瓷砖 DP 画图便知
function countNum(n) {
    let dp = [1, 1, 2]
    if (n === 1) return dp[0]
    if (n === 2) return dp[1]
    if (n === 3) return dp[2]
    for (let i = 3; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 3]
    }
    return dp[n - 1]
}

console.log(countNum(20))
