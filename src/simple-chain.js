const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 let chain = [];

 const chainMaker = {
     getLength () {
         return chain.length;
     },
     addLink (value = '') {
         chain.push(value === null ? 'null' : value);
         return this;
     },
     removeLink (position) {
         if (typeof position !== 'number' || position < 1 || position > chain.length) {
             this.destroy();
             throw Error(`You can't remove incorrect link!`);
         }
         chain.splice(position - 1, 1);
         return this;
     },
     reverseChain () {
         chain.reverse();
         return this;
     },
     finishChain () {
         let textChain = `( ${chain.join(' )~~( ')} )`;
         this.destroy();
         return textChain;
     },
 
     destroy () {
         chain = [];
     }
 };

module.exports = {
  chainMaker
};
