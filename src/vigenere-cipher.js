const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type) {
    this.reverseType = type === false;
}
encrypt (message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!')
    let shift = 0;
    key = key.toUpperCase().split("").map(c => c.charCodeAt(0) - 65);
    message = message.toUpperCase().split("").map((item, i) => (/[A-Z]/.test(item))
            ? String.fromCharCode((item.charCodeAt(0) - 65 + key[(i - shift) % key.length]) % 26 + 65)
            : (shift++, item));

    return this.reverseType ? message.reverse().join("") : message.join("")
}

decrypt (message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!')
    let shift = 0;
    key = key.toUpperCase().split("").map(c => c.charCodeAt(0) - 65);
    message = message.toUpperCase().split("").map((item, i) => (/[A-Z]/.test(item))
            ? String.fromCharCode((item.charCodeAt(0) - 65 + 26 - key[(i - shift) % key.length])
                    % 26 + 65)
            : (shift++, item));

    return this.reverseType ? message.reverse().join("") : message.join("");
}
}

module.exports = {
  VigenereCipheringMachine
};
