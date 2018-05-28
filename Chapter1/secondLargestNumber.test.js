import {
    secondLargestNumber,
    yieldSecondLargestNumber,
    kthLargestNumber, 
} from './secondLargestNumber'
import { 
  times,
  getRandomInt
} from '../heleprs';
  

describe('secondLargestNumber', () => {

  test('smallest array', () => {
    const problem = [9, 1]
    const solution = 1

    expect(secondLargestNumber(problem)).toEqual(solution);
  });
  test('small array (8)', () => {
    const problem = [9, 1, 5, 3, 2, 6, 8, 7]
    const solution = [...problem].sort((a,b)=> a > b ? -1 : 1)[1]

    expect(secondLargestNumber(problem)).toEqual(solution);
  });
  test('large array (1,000)', () => {
    const problem = times(1000, () => getRandomInt())
    const solution = [...problem].sort((a,b)=> a > b ? -1 : 1)[1]
    
    expect(secondLargestNumber(problem)).toEqual(solution);
  });
  test('inefficient: FAILS on big array (5000)', () => {
    function getNumber() {
      const problem = times(5000, () => getRandomInt())
      const solution = [...problem].sort((a,b)=> a > b ? -1 : 1)[1]
    
      secondLargestNumber(problem)
    }
    
    expect(getNumber).toThrowError(/Maximum/)
  });
})
describe('yieldSecondLargestNumber', () => {
  test('smallest array', () => {
    const problem = [9, 1]
    const solution = 1

    expect(yieldSecondLargestNumber(problem)).toEqual(solution);
  });
  test('small array (8)', () => {
    const problem = [9, 1, 5, 3, 2, 6, 8, 7]
    const solution = [...problem].sort((a,b)=> a > b ? -1 : 1)[1]

    expect(yieldSecondLargestNumber(problem)).toEqual(solution);
  });
  test('large array (1,000)', () => {
    const problem = times(1000, () => getRandomInt())
    const solution = [...problem].sort((a,b)=> a > b ? -1 : 1)[1]
    
    expect(yieldSecondLargestNumber(problem)).toEqual(solution);
  });
  test('inefficient: FAILS on big array (5,000)', () => {    
    function getNumber() {
      const problem = times(5000, () => getRandomInt())
      const solution = [...problem].sort((a,b)=> a > b ? -1 : 1)[1]

      yieldSecondLargestNumber(problem)
    }

    expect(getNumber).toThrowError(/Maximum/)
  });
})


// describe('kthLargestNumber', () => {
//   test('K greater than Array size causes an error', () => {
//     function getK() {
//       const list = [9, 1]
//       const k = 5 
//       const solution = 1
      
//       kthLargestNumber(list, k)
//     }
//     // Test that it throws an error message with greater in the message
//     expect(getK).toThrowError(/greater/)
//   });

//   test('smallest array', () => {
//     const list = [9, 1]
//     const k = 1 

//     const solution = 1
//     expect(kthLargestNumber(list, k)).toEqual(solution);
//   });
//   test('small array', () => {
//     const problem = [9, 1, 5, 3, 2, 6, 8, 7]
//     const k = 1

//     const sortedProblem = [...problem].sort((a,b)=> a > b ? -1 : 1)
//     const solution = sortedProblem[k]
//     expect(kthLargestNumber(problem, k)).toEqual(solution);
//   });
//   test('big array', () => {
//     const problem = times(10000, () => getRandomInt())
//     const k = 1
//     const result = kthLargestNumber(problem, k)

//     // sort ascending and get the kth value
//     const sortedProblem = [...problem].sort((a,b)=> a > b ? -1 : 1)
//     const solution = sortedProblem[k]
//     // console.log({
//     //   result, solution,
//     //   sollution10: sortedProblem.slice(0,10)
//     // })
//     expect(result).toEqual(solution);
//   });
// })
