/* Object containing all feature methods to
 be added to the String class*/
const stringExtension = {
  /**
  * @return{Boolean} - True if this String contains a vowel
  * False otherwise
  */
  hasVowels() {
    return this.match(/[aeiou]/i) !== null;
  },
  /**
  * @return{String} - This string with all lower case alphabets
  * converted to upper case
  */
  toUpper() {
    return this.replace(/[a-z]/g, (match) => {
      return String.fromCharCode(match.charCodeAt() - 32);
    });
  }

};

// Assign new methods to the String class
Object.assign(String.prototype, stringExtension);
