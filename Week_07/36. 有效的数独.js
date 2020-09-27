/**
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

示例 1:

输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true

示例 2:

输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
**/

var isValidSudoku = function(board) {
    let rows = []
    let cols = []
    let boxs= []
    for (let i = 0; i < 9; i++) {
         rows[i] = new Map()
         cols[i] = new Map()
         boxs[i] = new Map()
    }
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
         let val = board[r][c]
         const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
         if (val !== '.') {
            if (rows[r].has(val) || cols[c].has(val) || boxs[boxIndex].has(val)) {
            return false
         }
         rows[r].set(val,true)
         cols[c].set(val,true)
         boxs[boxIndex].set(val,true)
         }       
      }
    }
    return true
  };