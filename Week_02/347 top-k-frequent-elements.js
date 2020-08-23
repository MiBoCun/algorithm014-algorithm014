/*给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]

示例 2:

输入: nums = [1], k = 1
输出: [1]*/
//347. 前 K 个高频元素
var topKFrequent = function(nums, k) {
    let res = [], map = new Map();

    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));

    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    return res;

};
