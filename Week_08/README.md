冒泡排序：


function bubbleSort(arr) {

    var len = arr.length;
    
    for(let i = 0; i < len - 1; i++) {
    
        for(var j = 0; j < len - 1 - i; j++) {
        
            if(arr[j] > arr[j+1]) {        // 相邻元素两两对比
            
                var temp = arr[j];        // 元素交换
                
                arr[j] = arr[j+1];
                
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

选择排序：


function selectSort(arr) {

    let len = arr.length;
    
    let minIndex, temp;
    
    for(let i = 0; i < len - 1; i++) {
    
        minIndex = i;
        
        for(let j = i + 1; j < len; j++) {
        
            if(arr[j] < arr[minIndex]) {     // 寻找最小的数
            
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        
        arr[i] = arr[minIndex];
        
        arr[minIndex] = temp;
    }
    return arr;
}

