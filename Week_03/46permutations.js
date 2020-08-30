/*给定一个 没有重复 数字的序列，返回其所有可能的全排列。
示例:

输入: [1,2,3]
输出:
[
[1,2,3],
[1,3,2],
[2,1,3],
[2,3,1],
[3,1,2],
[3,2,1]
]*/

const permute = function (nums) {
    const res = [];
    const used = {};
    dfs([]);

    function dfs(path) {
        if (path.length == nums.length) {
            res.push(path.slice());
            return;
        }
        for (const num of nums) {
            if (used[num]) continue;
            path.push(num);
            used[num] = true;
            dfs(path);
            path.pop();
            used[num] = false;
        }
    }
    return res;
};
const nums=[1,2,3]
console.log(permute(num))


