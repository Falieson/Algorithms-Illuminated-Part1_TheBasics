import {
    karatsubaMultiply,
    karatsubaMulti1,
    karatsubaMulti2,
} from './karatsubaMultiply'


describe('karatsubaMultiply', () => {
  test('small x=1000, y=1000', () => {
    const x = 1000, y = 1000
    const solution = "1000000"
    expect(karatsubaMultiply(x,y)).toEqual(solution)
  })
  test('large x=1000000, y=1000000', () => {
    const x = 1000000, y = 1000000
    const solution = "1000000000000"
    // expect(`${x*y}`).toEqual(solution) // check solution is correct
    expect(karatsubaMultiply(x,y)).toEqual(solution)
  })
  test('FAILS: big NUMBER x.length === 64 === y.length', () => {
    function multiply() {
      const x = 3141592653589793238462643383279502884197169399375105820974944592
      const y = 2718281828459045235360287471352662497757247093699959574966967627
      // const solution = "8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184"
      karatsubaMultiply(x,y)
    }
    
    expect(multiply).toThrowError(/MAX_SAFE_INTEGER/)
  })
  test('big STRING x.length === 64 === y.length', () => {
    const x = '3141592653589793238462643383279502884197169399375105820974944592'
    const y = '2718281828459045235360287471352662497757247093699959574966967627'
    const solution = '8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184'
    
    // expect(`${x*y}`).toEqual(solution) // check solution is correct    
    expect(karatsubaMultiply(x,y)).toEqual(solution)
  })
})

describe('karatsubaMulti1', () => {
  test('small x=1000, y=1000', () => {
    const x = 1000, y = 1000
    const solution = 1000000
    expect(karatsubaMulti1(x,y)).toEqual(solution)
  })
  test('large x=1000000, y=1000000', () => {
    const x = 1000000, y = 1000000
    const solution = 1000000000000
    expect(karatsubaMulti1(x,y)).toEqual(solution)
  })
  test('FAILS: big x.length === 64 === y.length', () => {
    function multiply() {
      const x = '3141592653589793238462643383279502884197169399375105820974944592'
      const y = '2718281828459045235360287471352662497757247093699959574966967627'
      // const solution = 8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184
      
      karatsubaMulti1(x,y)
    }
    
    expect(multiply).toThrowError(/MAX_SAFE_INTEGER/)
  })
})

describe('karatsubaMulti2', () => {
  test('small x=1000, y=1000', () => {
    const x = 1000, y = 1000
    const solution = 1000000
    expect(karatsubaMulti2(x,y)).toEqual(solution)
  })
  test('large x=1000000, y=1000000', () => {
    const x = 1000000, y = 1000000
    const solution = 1000000000000
    expect(karatsubaMulti2(x,y)).toEqual(solution)
  })
  test('FAILS: big x.length === 64 === y.length', () => {
    function multiply() {
      const x = '3141592653589793238462643383279502884197169399375105820974944592'
      const y = '2718281828459045235360287471352662497757247093699959574966967627'
      // const solution = 8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184
      
      karatsubaMulti2(x,y)
    }
    
    expect(multiply).toThrowError(/MAX_SAFE_INTEGER/)
  })
})
