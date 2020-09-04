/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let x=0,y=0,dir=0,max=0;
    let dx = [0, 1, 0, -1]; //N,E,S,W
    let dy = [1, 0, -1, 0]; //N,E,S,W
    let obSet=new Set()   
    for (let ob of obstacles) {
        obSet.add(ob[0]+'#'+ob[1])
    }
    for (let com of commands) {
       switch(com){
          case -1:
          dir=(dir+1)%4
          break
          case -2:
          dir=(dir+3)%4
          break
          default:
          while(com--){
          let nextX=x+dx[dir]
          let nextY=y+dy[dir]           
          if (obSet.has(nextX+'#'+nextY)) {
                break //减少不必要计算
          }else {
                 x=nextX
                 y=nextY
                 max = Math.max(max, x*x + y*y)
               }
          } 
       }       
    }
    return max
};