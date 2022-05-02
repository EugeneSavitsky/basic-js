const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) { 
   if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
    throw new Error('Invalid date!');
  }
  let result = date.getMonth();
  if (0 <= result & result < 2 || result === 11) return('winter');
  if (2 <= result & result < 5)  return('spring');
  if (5 <= result & result < 8)  return('summer');
  if (8 <= result & result < 11) return('autumn'); 
}


module.exports = {
  getSeason
};
