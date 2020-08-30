学习笔记  

初次学习递归算法，对于代码理解，表达实属菜鸟。

参考递归代码模板， 配合草稿代码运行层次。逐步调试，测试。

同时参考优秀代码实现，不断迭代自己代码。


const recursion = (level, params) =>{
   // 1：recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return 
   }
   // 2：process current level
   process(level, params)
   
   // 3：drill down
   recursion(level+1, params)
   
   //4：clean current level status if needed   
}
