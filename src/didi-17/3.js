const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let n = 0, m = 0, P = 0, maze = []
rl.on('line', function (line) {
    if (n === 0 || m === 0 || P === 0) {
        [n, m, P] = line.trim().split(' ').map(Number)
    } else {
        maze.push(line.trim().split(' ').map(Number))
        if (maze.length === n) {
            deal(n, m, maze)
            n = 0
            m = 0
            P = 0
            maze.length = 0
        }
    }
})

//应该用回溯算法能做，回溯走通的路径中选择体力消耗最小的路径
function deal(n, m, arr) {
    //体力值耗尽未到达或中途卡死 Can not escape!

    console.log(n, m, arr)
}
