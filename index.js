var kabinenstatus = require("./JavaScripts/kabinenstatus.js")

//kabinenstatus()


/*
//Flat nested Array

let arr = [1, [2, [3], [[4], 5], 6]];

function flatten(arr) {
  const reducerFunc = (acc, curVal) => acc.concat(Array.isArray(curVal) ? flatten(curVal) : curVal);
  return arr.reduce(reducerFunc, [])
}

console.log(flatten(arr))


// Remove duplicates

const rmDuplicates = (arr) => {
  let result = []
  arr.reduce((acc, curVal) => {
    
      if (acc == curVal) {
        return curVal
      }
      else {
        result.push(curVal)
        return curVal
      }
  },0)
    return result
  }
             
console.log(rmDuplicates([1, 2, 2, 3, 4, 4, 4]))


// Reverse an array without mutating it
let arr = [1,2,3,4,5,6]
const reverseArray = arr.reduceRight((acc, curVal) => [...acc, curVal], [])

console.log(reverseArray)
*/