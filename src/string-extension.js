/* Object containing all feature methods to
 be added to the String class*/
const stringExtension = {
  hasVowels() {
    return this.match(/[aeiou]/i) !== null;
  }
};

// Assign new methods to the String class
Object.assign(String.prototype, stringExtension);
