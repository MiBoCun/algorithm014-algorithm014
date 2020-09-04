/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let sortG=g.sort((a,b)=>{return a-b})
    let sortS=s.sort((a,b)=>{return a-b})
    let i=0; //学生
    let j=0; //饼干
    let count=0;
    while(i<=sortG.length-1 && j<=sortS.length-1){
          if(sortS[j]>=sortG[i]){
              count++
              i++              
          }
          j++
    }
    return count
};