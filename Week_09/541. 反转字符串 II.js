var reverseStr = function (s, k) {
    let result = [];
    let n = 2 * k;
    let len = Math.ceil(s.length / n);
    for (let i = 0; i < len; i++) {
        result.push(s.substr(n * i, n));
    }
    result = result.map(item => {
        return item.substr(0, k).split('').reverse().join('') + item.substr(k);
    });
    return result.join('');
}

let s = "abcdefg",
    k = 2
console.log(reverseStr(s, k))