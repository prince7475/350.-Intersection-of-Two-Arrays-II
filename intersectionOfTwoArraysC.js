Input: nums1 = [4,9,5], nums2 =
 [9,4,9,8,4]

var intersect = function(nums1, nums2) {
    let shortArr
    let longestArr
    if(num1.length > num2.length){
      longestArr = num1
      shortArr = num2
    }else {
      shortArr = num1
      longestArr = num2
    }
    
    let result = []
    let queue = longestArr
    let idx = 0
    while(queue.length > 0){
      let qValue = queue.shift()
      let shortValue = shortArr[idx]
      
      if(qValue === shortValue){
        let tempArr = []
        tempArr.push(qValue)
        idx++
        while(queue[0] === shortArr[idx]){
          let tempValue = queue.shift()
          tempArr.push(tempValue)
          idx++
        }
        
        if(tempArr.length > result.length){
          result = tempArr
        }
      }
    
    }
    return result
};



var intersect = function(num1,num2){
    let shortest
    let longest
    if(num1.length > num2.length){
      longest = num1
      shortest = num2
    }else {
      longest = num2
      shortest = num1
    }
    
    let hash = {}
    for(let num of longest){
      if(!hash[num]) hash[num] = 0
      hash[num] += 1
    }
    let result = []
    for(const num of shortest){
      if(hash[num] && hash[num] > 0){
        result.push(num)
        hash[num] -= 1
      }
    }
    
    return result
}




find the longest array
create a queue that contains the longestArr
let shortArr = shortestArr

let idx = 0
let result = []
while(queue.length > 0){
  let lV = queue.shift()
  let sV = shortArr[idx]
  
  if(lV == sV){
    let tempArr = []
    tempArr.push(lV)
    idx++ 
    while(queue[0] === shortArr[idx]){
      let tempValue = queue.shift()
      tempArr.push(tempValue)
      idx++
    }
    if(tempArr.length > result.length){
      result = tempArr
    }
  }
  
  return result
}
