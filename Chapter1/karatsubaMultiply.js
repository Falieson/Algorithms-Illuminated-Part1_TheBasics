/** Algorithms Illuminated
  * Chapter 1: Problem Set 1.7
  * Karatsuba Multiplication
  * (by haocong)[https://gist.github.com/haocong/c2d9b2169d28eb15a94d]
  * @param  {Number} x - first number
  * @param  {Number} y - second number
  * @return {Number} Multiply of x and y
**/
 
export function karatsubaMulti1(x, y) {
  let n = Math.min(('' + x).length, ('' + y).length)

  if(n == 1)
      return x * y

  let tenpowhalfn = Math.pow(10, parseInt(n / 2))
  let tenpown = Math.pow(10, 2 * parseInt(n / 2))

  let a = parseInt(x / tenpowhalfn)
  let b = x % tenpowhalfn
  let c = parseInt(y / tenpowhalfn)
  let d = y % tenpowhalfn

  return tenpown * karatsubaMulti1(a, c)
    + tenpowhalfn * (karatsubaMulti1(a, d)
    + karatsubaMulti1(b, c))
    + karatsubaMulti1(b, d)
}

export function karatsubaMulti2(x,y) {
  // https://stackoverflow.com/a/28376023/604950
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
