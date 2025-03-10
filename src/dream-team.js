const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let acum = [];

  if (!Array.isArray(members) || members.length < 1) return false;

  for (let i=0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].split(' ').join('')
      acum.push(members[i][0].toUpperCase());
    }
  }

  acum.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  return acum.join('')
}

module.exports = {
  createDreamTeam
};
