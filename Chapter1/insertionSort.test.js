import {
  insertionSort,
} from './insertionSort'
import {
  getRandomInt,
  times,
} from '../heleprs';

describe('insertionSort', () => {
  test('sorts a small array', () => {
    const problem = [4,1,3,5]
    const solution = [1,3,4,5]
    expect(insertionSort(problem)).toEqual(solution);
  });
  test('sorts a large array', () => {
    const problem = times(10000, () => getRandomInt())
    const solution = [...problem].sort((a,b)=> a > b ? 1 : -1)

    expect(insertionSort(problem)).toEqual(solution);
  });
})
