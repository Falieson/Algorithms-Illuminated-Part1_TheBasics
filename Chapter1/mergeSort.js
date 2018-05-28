/** Algorithms Illuminated
  * Chapter 1 Review: MergeSort
  * Write a merge sort Algorithm
  * (ref)[https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0]
**/


export class mergeSort {
  constructor(arr) {
    if(arr) {
      return this.exec(arr)
    }
  }
  merge(left, right) {
    const totalLength = left.length + right.length

    const res = []
    let indexLeft =0
    let indexRight =0

    // SORTING
    while(indexLeft < left.length && indexRight < right.length) {
      if(left[indexLeft] < right[indexRight]) {
        res.push(left[indexLeft])
        indexLeft++
      }
      else {
        res.push(right[indexRight])
        indexRight++
      }
    }

    // MERGING
    return res.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
  exec(arr) {
    if(arr.length === 1) {  // RECURSION BOUNDARY
      return arr
    }

    // SPLIT IN HALF (divide and conquer)
    const middle = Math.floor(arr.length / 2) // odd lengthed arrays, right is 1 bigger than left
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return this.merge(
      this.exec(left), this.exec(right)
    )
    // recursion call stack looks like
    // => exec(arr)
    // => merge(exec(arr.L), exec(arr.R))
    // => merge(
    //     exec( merge(exec(arr.L.L), exec(arr.L.R)) ),
    //     exec( merge(exec(arr.R.L), exec(arr.R.R)) ),
    //   )
    // etc...
  }
}
