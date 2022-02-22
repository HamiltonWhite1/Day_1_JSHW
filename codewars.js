// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

// First Code Wars problem. This was new to me, I haven't done this problem before. JS syntax made it easier to understand, interesingly enough

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

const cannonsReady = (gunners) => {
    numOfGuns = Object.keys(gunners).length
    numAye = 0
    for (const property in gunners ){
        if (gunners[property] === "aye"){
            numAye++
        }
    }
    if (numAye === Object.keys(gunners).length){
        return "Fire!"
    }
    else {
        return "Shiver me timbers!"
    }
  }
cannonsReady(b)

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

//Second Code Wars JS problem
function even_or_odd(number) {
    if (number % 2 === 0){
      return "Even"
    }
    else {
      return "Odd"
    }
  }

//   https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
  //Third Code Wars JS problem
  function multiply(a, b){
    return a * b
   }

//    https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// Fourth Code Wars JS problem. This code passes the Test check on Code Wars, but not the attempt. Unclear as to why. Gives an invalid array length error
const solution = (number) => {
    sumOfNumber = 0
    for (const x of Array(number).keys()){
        if (x % 3 === 0 || x % 5 === 0){
            sumOfNumber += x
        }
    }
    return sumOfNumber
}
console.log(solution(10))