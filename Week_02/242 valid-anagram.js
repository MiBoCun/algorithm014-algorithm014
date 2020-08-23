/*给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
示例 1:

输入: s = "anagram", t = "nagaram"
输出: true

示例 2:

输入: s = "rat", t = "car"
输出: false*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//242. 有效的字母异位词
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false
    const count={}
    for(let i of s){
        count[i]=(count[i]||0)+1
    }
    for(let i of t){
        if (!count[i]) return false
        count[i]--
    }
    return true
};
