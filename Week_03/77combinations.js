
/*给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
示例:

    输入:n = 4, k = 2
输出:
    [
        [2,4],
        [3,4],
        [2,3],
        [1,2],
        [1,3],
        [1,4],
    ]*/


const  combine = function (n, k) {
    let res = []
    function helper(start, prev){
        for (let i = start; i <= n; i++) { // 第一层
            const cur = prev.concat(i)
            if (cur.length === k) { // 出口条件
                res.push(cur)
            } else {
                helper(i + 1, cur) // 第二层
            }
        }
    }
    helper(1, [])
    return res
};
let n=4;k=2;
console.log(combine(4,2))

