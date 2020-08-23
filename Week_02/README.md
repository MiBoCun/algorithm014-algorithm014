
  


解题思路

49 group-anagrams

method:循环遍历，利用hashMap。遍历字符排序后key,map.set(k),返回map.values()

complexity：time o(n),space o(n)

242 valid-anagram

method:循环遍历，利用hashMap，统计s字符串元素出现个数,遍历t字符串，出现相同元素，则count减1.

complexity:time o(n) space o(n)

347 top-k-frequent-elements

method:循环遍历，利用hashMap，统计元素出现个数,元素个数排序，再次循环，返回前K个。(es6 ...扩展运算符)

complexity:time o(n) space o(n)



