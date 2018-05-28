/** Algorithms Illuminated
  * Chapter 1 Review: InsertionSort
  * Every iteration through the collection leaves a greater segment sorted.
  * Inserts single element in the right for a given iteration.
  * (visual stepper)[http://algorithms.openmymind.net/sort/insertionsort.html]
**/

export function insertionSort(arr) {
   // copy the array so you aren't making changes to the input (immutability)
  const res = [...arr]
  // from this point forward work with res, because res is revaluated with each step
  for (let i = 1; i < res.length; i++) { // traverse the entire input
    let curr = res[i] // the element that is being placed
    
    // then step left through all the sorted values
    let j = i -1      // the position to the left of i (element before i)
    for (;            // for(a;b;c), 'a' defined in previous line, we want this scoped outside the loop
      j >= 0 &&       // if j is less than 0 then we are out of elements, array[-1] isn't a thing
      res[j] > curr;  // AND checks if the element to the left is greater than the current element
      j--             // if succesful, setup j for the next iteration
    ) {
      res[j + 1] = res[j] // and move res[j] over one position
    }

    res[j+1] = curr   // else the left element is less than curr, and set curr to this position
  }
  return res
}