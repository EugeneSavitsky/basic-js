const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options = Object.assign({
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|'
  }, options);

let arrAdditional = [];
    for (let j = 0; j < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); j++) {
        arrAdditional.push(options.addition + '');
    }

    let arrResult = [];
    for (let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
        arrResult.push(str + arrAdditional.join(options.additionSeparator));
    }
    return arrResult.join(options.separator);
}

module.exports = {
  repeater
};
