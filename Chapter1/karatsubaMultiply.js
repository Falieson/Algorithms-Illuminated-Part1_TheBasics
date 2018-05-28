/** Algorithms Illuminated
  * Chapter 1: Problem Set 1.7
  * Karatsuba Multiplication
  * @param  {Number} x - first number
  * @param  {Number} y - second number
  * @return {Number} Multiply of x and y
**/

import {BigNumber} from 'bignumber.js';

/** karatsubaMultiply
 * (by falieson)[https://github.com/falieson] based on haocong
  @param x — - first number
  @param y — - second number
  @return — Multiply of x and y
***/
let i = 0
export function karatsubaMultiply(_x, _y) {
  // console.log(i, `: Starting karatsubaMultiply(${_x}, ${_y})`)
  i++
  
  if(_x === 0|| _y === 0) return 0


  if(typeof(_x) === 'number' || typeof(_y) === 'number') {
    // If passed numbers instead of strings check for unsafe integers
    if( !Number.isSafeInteger(_x)
      || !Number.isSafeInteger(_y)
      || !Number.isSafeInteger(_x * _y)
    ) throw new Error('Pass large number parameters as strings, re: "MAX_SAFE_INTEGER"')
  }
  
  const x = new BigNumber(_x)
  const y = new BigNumber(_y)
  const n = Math.min(('' + _x).length, ('' + _y).length)

  if(n == 1) { // tiny multiply
    // console.log('tiny return: ', {_x, _y})
    return x*y    
  }

  const tenpowhalfn = new BigNumber(10).pow(Math.floor(n/2))    //  Math.pow(10, parseInt(n / 2))
  const tenpown = new BigNumber(10).pow(2 * Math.floor(n/2))    // Math.pow(10, 2 * parseInt(n / 2))

  const a = x.idiv(tenpowhalfn)             // parseInt(x / tenpowhalfn)
  const b = x.mod(tenpowhalfn)              // x % tenpowhalfn
  const c = y.idiv(tenpowhalfn)             // parseInt(y / tenpowhalfn)
  const d = y.mod(tenpowhalfn)              // y % tenpowhalfn

  // return tenpown * karatsubaMulti1(a, c)
  // + tenpowhalfn * (
  //     karatsubaMulti1(a, d) + karatsubaMulti1(b, c)
  //   )
  // + karatsubaMulti1(b, d)
  const p0 = tenpown.times(karatsubaMultiply(a, c))
  const p1a = new BigNumber(karatsubaMultiply(a, d)).plus(karatsubaMultiply(b, c))
  const p1 = tenpowhalfn.times(p1a)
  const p2 = karatsubaMultiply(b, d)
  const result = p0
    .plus(p1)
    .plus(p2)

  return result.toFixed()
}


/** karatsubaMulti1
  * (by haocong)[https://gist.github.com/haocong/c2d9b2169d28eb15a94d]
  @param x — - first number
  @param y — - second number
  @return — Multiply of x and y
***/
export function karatsubaMulti1(_x, _y) {
  if((''+_x).length + (''+_y).length > 64) throw new Error('Result would be greater than MAX_SAFE_INTEGER')
  const x = parseInt(_x), y = parseInt(_y)

  let n = Math.min(('' + x).length, ('' + y).length)
  if(n == 1)
      return x * y

  let tenpowhalfn = Math.pow(10, parseInt(n / 2)) // Math.floor() is much faster than parseInt
  let tenpown = Math.pow(10, 2 * parseInt(n / 2)) // Math.floor() is much faster than parseInt

  let a = parseInt(x / tenpowhalfn)
  let b = x % tenpowhalfn
  let c = parseInt(y / tenpowhalfn)
  let d = y % tenpowhalfn

  return tenpown * karatsubaMulti1(a, c)
    + tenpowhalfn * (
        karatsubaMulti1(a, d) + karatsubaMulti1(b, c)
      )
    + karatsubaMulti1(b, d)
}

/** karatsubaMulti2
 * (ref)[https://stackoverflow.com/a/28376023/604950]
 * @param  {} x
 * @param  {} y
 */
export function karatsubaMulti2(_x,_y) {
  if((''+_x).length + (''+_y).length > 64) throw new Error('Result would be greater than MAX_SAFE_INTEGER')
  const x = parseInt(_x), y = parseInt(_y)

  var x1,x0,y1,y0,base,m;
  base  = 10;


  if((x<base)||(y<base)){
    // console.log( " X - y = " , x,y, x*y)
    return x * y;
  }

  var dummy_x = x.toString();
  var dummy_y = y.toString();

  var n = (dummy_x.length > dummy_y.length) ? dummy_y.length : dummy_x.length;
  m = Math.round(n/2);



  var high1 = parseInt(dummy_x.substring(0,dummy_x.length-m));
  var low1 = parseInt(dummy_x.substring(dummy_x.length-m,dummy_x.length  )) ;

  var high2 = parseInt(dummy_y.substring(0,dummy_y.length-m)); 
  var low2 = parseInt(dummy_y.substring(dummy_y.length-m,dummy_y.length));


  var z0   =   karatsubaMulti2( low1, low2);
  var z1   =   karatsubaMulti2(low1+high1, low2+high2);
  var z2   =   karatsubaMulti2(high1,high2);

  var res  =   (z2 *  Math.pow(10, 2 * m )  ) + ( (z1-z2-z0) * Math.pow(10,  m )) + z0;

  return res;
 }
