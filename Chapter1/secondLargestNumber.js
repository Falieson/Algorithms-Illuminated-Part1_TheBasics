/** Algorithms Illuminated
  * Chapter 1: Problem Set 1.6
  * given an input of n distinct numbers where n is a power of 2
  * find an algorithm that identifies the second largest number in the arr
**/

export function secondLargestNumber(arr, dex=0, max1=-Infinity, max2=-Infinity) {
  // arr.length must be less than 10,000, or it will error
  //   the callstack is the size of the array
  if(dex < arr.length) {
    const curr = arr[dex]
    if(curr > max1) {
      max2 = max1
      max1 = curr
    }
    else if (curr > max2) {
      max2 = curr
    }

    return secondLargestNumber(arr, dex+1, max1, max2)
  }

  return max2
}

export function yieldSecondLargestNumber(
  _arr,
  _dex=0,
  _max1=-Infinity,
  _max2=-Infinity,
) {
  function* generator(arr, dex, max1, max2) {
    // exact same function as secondLargestNumber
    if(dex < arr.length) {
      const curr = arr[dex]
      if(curr > max1) {
        max2 = max1
        max1 = curr
      }
      else if (curr > max2) {
        max2 = curr
      }

      yield* generator(arr, dex+1, max1, max2)
    }
    else {
      yield max2
    }
  }

  const gen = generator(_arr, _dex, _max1, _max2)

  let res = {value: 0, done: false}
  let next = {value: 0, done: false}
  while (next.done === false) {
    res = next
    next = gen.next()
  }
  return res.value
}

// FIXME: I must have ported this wrong
// https://en.wikipedia.org/wiki/Selection_algorithm#Partition-based_general_selection_algorithm
// export function kthLargestNumber(arr, k) {
//   if(k > arr.length -1) throw new Error('Selection can\'t be greater than len of array')
//   if(k === arr.length -1) return arr[k]

//   const res = [...arr]
//   for(let i = 1; i<=k; i++) {
//     let minIndex = i
//     let minValue = res[i]

//     let j = i+1
//     for(; j <= res.length; j++) {
//       const curr = res[j]
//       if(curr < minValue) {
//         minIndex = j
//         minValue = curr
//         res[i] = curr
//       }
//     }
//     // console.log({
//     //   result10: res.slice(0, 10)
//     // })
//     return res[k]
//   }
// }

// FIRST REV
// export function secondLargestNumber(arr) {
//   // SPLIT IN HALF (divide and conquer)
//   const middle = arr.length / 2 // odd lengthed arrays, right is 1 bigger than left
//   const left = arr.slice(0, middle)
//   const right = arr.slice(middle)

//   if (arr.length === 2) {  // RECURSION BOUNDARY
//     // sorts descending
//     return left[0] > right[0] ? left[0] : right[0]
//   }

//   const result = secondLargestNumber(left) > secondLargestNumber(right)
//   console.log({
//     result,
//     left, right    
//   })
//   return result
// }