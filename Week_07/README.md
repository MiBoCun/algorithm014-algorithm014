BFS
const visited = new Set()

const dfs = node => {

  if (visited.has(node)) return
  
  visited.add(node)
  
  dfs(node.left)
  
  dfs(node.right)
}

岛屿问题、被包围区域。类似二维数组，经分析，基本适用BFS算法。区别在于被搜索过的数据记录及具体分叉情况(搜索节点)。

代码实现上，可以先以模板代码为示例，具体拆分逻辑。例如岛屿数量及被围绕区域，涉及到当前单元格上、下、左、右节点的搜索遍历。所以对于此类算法问题的解决步骤为: 

1:分析具体适用的算法 2：以示例代码，迭代调试。
