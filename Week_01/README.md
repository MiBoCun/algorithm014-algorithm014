学习笔记：

一：方法

学而不思则罔，思而不码则殆。
1：有思路，直接码;没有参考直接参考题解、国际版most votes

2：不能死磕，不要死磕。

3：可以一个解题方法，比如双指针，可以通过大量练习题掌握，循序渐进。

4：五毒神掌，多次练习，思考。

二：解题思路

 1:two-sum
 
 	method:循环遍历，利用hashMap，记录元素为key,index为value,通过差值判断是否存在值，存在则返回。
 
 	complexity：time o(n),space o(n)
 
 26:remove-duplicates-from-sorted-array
 
 	method:因为是sorted array,故数组重复，肯定相邻。使用双指针，i,j。i快指针遍历，从1开始，j慢指针比较，不相等则更新，同时j++.
 
 	complexity:time o(n) space o(1)
 
 66:plus-one
 
 	method: 从右往左，数组末尾开始遍历，小于9，加一，return 循环，否则0，继续循环。最后判断数组首位是否为0，特殊情况9999。
 
 	complexity:time o(n) space o(1)
 
 189:rotate-array
 
 	method:分析得出，旋转数组顺序为数组末尾从右向左，一次插入数组首位。直接使用js pop:删除数组末尾元素，onshift:数组的开头添加元素
 
 	complexity:time o(n) space o(1)
 
 283:move-zeroes
 
 	method:双指针：两次遍历：1：i快指针遍历,j记录非零。2:j之后赋值0
 
 	complexity: time o(n) space o(1)
 
