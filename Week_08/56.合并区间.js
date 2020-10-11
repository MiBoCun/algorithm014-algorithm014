var merge = function (intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  let res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let lst = res[res.length - 1]
    if (intervals[i][0] > lst[1]) {
      res.push(intervals[i])
    } else {
      if (intervals[i][1] >= lst[1]) {
        lst[1] = intervals[i][1]

      }
    }
  }
  return res
};

let intervals = [
  [1, 4],
  [1, 3],
  [1, 8],
  [4, 12],
  [4, 9]
]
console.log(merge(intervals))
