const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [...n.toString()].map(Number); console.log(arr)
  let acum;
  let resArr = [];
  for (let i=0; i < arr.length; i++) {
    acum = arr[i];
    arr[i] = '';
    let num = Number(arr.join(""));
    console.log('num', num)
    resArr.push(num)
    arr[i] = acum;
  }
  return Math.max(...resArr);
}

module.exports = {
  deleteDigit
};
