//takes an array, removes smallest number and returns new array.
function removeSmallest(numbers) {
    let newArr = numbers.slice(0)
    let lowest = newArr.indexOf(Math.min(...numbers))
    newArr.splice(lowest, 1)
    return newArr 
  }

console.log(removeSmallest([1,2,3,4,5,6,1])) // => [ 2, 3, 4, 5, 6, 1 ]
console.log(removeSmallest([11,22,13,4,55,676,111])) // => [ 11, 22, 13, 55, 676, 111 ]
console.log(removeSmallest([2,65,77,81,2,5,3])) // => [ 65, 77, 81, 2, 5, 3 ]