    var ladderLength = function(beginWord, endWord, wordList) {
        let len=beginWord.length;
        let map=new Map() //保存所有单词的所有可能的连接单词   
        
        for (let w of wordList) {
            for(let i=0;i<len;i++) {
                let newW=w.substring(0,i)+'*'+w.substring(i+1,len)
                let mapItem=map.get(newW)||[]
                    mapItem.push(w)
                    map.set(newW,mapItem)
               }
        }
        let queue=[[beginWord,1]]  //记录访问路径
        let visited=new Set()  //存储访问过的单词
            visited.add(beginWord)
        while (queue.length){
            let curNode=queue.shift()
            let curW=curNode[0]
            let curL=curNode[1]
            for (let i=0;i<len;i++) {
                let qWord=curW.substring(0,i)+'*'+curW.substring(i+1,len)
                if (map.has(qWord)) {
                    let tempW=map.get(qWord)
                    for (let tem of tempW) {
                        if (tem===endWord) {
                            return curL+1
                        }
                        if (!visited.has(tem)) {
                            visited.add(tem)
                            queue.push([tem,curL+1])
                        }
                    }
                }
            }
        }
        return 0
    };
