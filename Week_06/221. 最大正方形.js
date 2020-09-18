/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if ( matrix.length == 0 ) {
              return 0;
          }
    let dp = []
    let row = matrix.length; 
    let col = matrix[0].length;
    let maxSide = 0;
    //生成dp 二维数组，同时包裹一层、一列，默认0
    for (let i = 0;i < row+1;  i++) {
       if (i == 0) {
          dp[i] = Array(col+1).fill(0)       
       }else{
         dp[i] = [0]
       }
    }
    for (let i = 1;i < row+1; i++) {
         for (let j = 1;j < col+1; j++) {
            if (matrix[i-1][j-1] === '1') {            
               dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1
               maxSide = Math.max(dp[i][j],maxSide)            
            }else {
               dp[i][j] = 0
            }
          }       
    }
    return maxSide*maxSide
  
  };