'use strict';

/* Object containing all feature methods to
 be added to the String class*/
const stringExtension = {
  /**
  * Check if this String contains any of the English vowels
  * (in upper or lower case).
  * @return{Boolean} - True if this String contains a vowel
  * otherwise False.
  */
  hasVowels() {
    const match = /[aeiou]/i;
    return match.test(this);
  },
  /**
  * Replace all lower case letters in this String with uppercase
  * @return{String} - This string with all lower case alphabets
  * converted to upper case
  */
  toUpper() {
    return this.replace(/[a-z]/g, match =>
      String.fromCharCode(match.charCodeAt() - 32));
  },
  /**
  * Replace all upper case letters in this String with lower case
  * @return{String} - This String with all upper case letters transformed
  * to lower case
  */
  toLower() {
    return this.replace(/[A-Z]/g, match =>
      String.fromCharCode(match.charCodeAt() + 32));
  },
  /**
  * Transform the first alphabet of the String to Upper case
  * if it is in lower case.
  * @return{String} - This string with it's first alphabet converted to
  * upper case.
  */
  ucFirst() {
    return this.replace(/^[a-z]/, match => match.toUpper());
  },
  /**
  * Check if this String ends with a question (?) mark
  * @return{Boolean} - True if this string ends with a question mark
  * False other wise
  */
  isQuestion() {
    return this.match(/\?$/) !== null;
  },
  /**
  * Fetch an array containing all the words in this String
  * @return{Array} - An array containing all the words in this string
  */
  words() {
    // remove trailing white spaces
    return this.trim()
      .split(/\s+/g);
  },
  /**
  * Fetch the number of words in this String
  * @return{Number} - The number of words in this String
  */
  wordCount() {
    return this.words().length;
  },
  /**
  * Create a currency representation of this String
  * @return{String} - A String formated to Currency
  */
  toCurrency() {
    return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  },
  /**
  * Create a number from this String formatted as a currency
  * @return{Number} - A Number representation of this String
  */
  fromCurrency() {
    return Number(this.replace(/,/g, ''));
  },
  /**
  * @return{String} - Returns each letter in the string as an inverse of its
  * current case
  */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, (match) => {
      if (match.charCodeAt() > 90) {
        return match.toUpper();
      }
      return match.toLower();
    });
  },
  /**
  * @return{String} - Returns the letters in alternating cases, starting
  * with a lower case
  */
  alternatingCase() {
    let toSmall = true;
    return this.replace(/[a-zA-Z]/g, (match) => {
      if (toSmall) {
        toSmall = false;
        return match.toLower();
      }
      toSmall = true;
      return match.toUpper();
    });
  },
  /**
  * Fetch characters in the middle of a String
  * @return{String} - The character(s) in the middle of the string
  */
  getMiddle() {
    const halfLength = this.length / 2;
    if (this.length % 2 === 0) {
      return this.substring(halfLength - 1, halfLength + 1);
    }
    return this.substring(halfLength, halfLength + 1);
  },
  /**
  * converts all Numbers in this String to their
  * English word
  * @return{String} - This String with all Numbers contained in it
  * transformed to their English word
  */
  numberWords() {
    const numberText = [
      'zero ',
      'one ',
      'two ',
      'three ',
      'four ',
      'five ',
      'six ',
      'seven ',
      'eight ',
      'nine '
    ];
    const convertedString = this.replace(/[0-9]/g, match =>
      numberText[Number(match)]);
    return convertedString.replace(/\s$/, '');
  },
  /**
  * Checks if a String is a digit (one number)
  * @return{Boolean} - True if the String is a single digit
  * False otherwise
  */
  isDigit() {
    return this.match(/^[0-9]$/) !== null;
  },
  /**
  * Returns true if a string contains double characters
  * (including whitespace character)
  * @return{Boolean} - True if this String contains double characters
  * False otherwise
  */
  doubleCheck() {
    return this.match(/(.)\1/g) !== null;
  }
};

// Assign new methods to the String class
Object.assign(String.prototype, stringExtension);
