
// https://www.wikihow.com/Calculate-Leap-Years

/*

   f + t = t
   f + f = t
   

*/


let isLeapYear = (year) => {
   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 'Leap Year'
   } else return 'Not Leap Year'
}

let res = isLeapYear(2000)

console.log(res)