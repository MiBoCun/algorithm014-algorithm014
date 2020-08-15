var twoSum = function(nums, target) {
    let len=nums.length
    let diffs={}
    for(let i=0;i<len;i++){
        let dif=target-nums[i]
        if(diffs[dif]!=undefined){
            return [diffs[dif],i]
        }else{
            diffs[nums[i]]=i
        }
    }

};