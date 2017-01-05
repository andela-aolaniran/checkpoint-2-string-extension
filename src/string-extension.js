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
  * Replaces all lower case alphabets in this String with uppercase
  * @return{String} - This String with all lower case alphabets
  * converted to upper case
  */
  toUpper() {
    return this.replace(/[a-z]/g, match =>
      String.fromCharCode(match.charCodeAt() - 32));
  },
  /**
  * Replaces all upper case alphabets in this String with lower case
  * @return{String} - This String with all upper case alphabets transformed
  * to lower case
  */
  toLower() {
    return this.replace(/[A-Z]/g, match =>
      String.fromCharCode(match.charCodeAt() + 32));
  },
  /**
  * Transforms the first character of the String (if it's an alphabet)
  * from lower case to upper case.
  * @return{String} - This string with it's first character (if it's an
  * alphabet) converted to upper case.
  */
  ucFirst() {
    return this.replace(/^[a-z]/, match => match.toUpper());
  },
  /**
  * Check if this String ends with a question (?) mark
  * @return{Boolean} - True if this string ends with a question mark
  * otherwise False.
  */
  isQuestion() {
    const match = /\?$/;
    return match.test(this);
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
    // get the mantissa and characteristic
    const parts = this.split('.');
    if (parts.length > 2) {
      throw new Error('Invalid String');
    }
    const mantissa = parts[1] ? parts[1] : '00';
    const builtCharacteristic =
      parts[0].replace(/\B(?=([0-9]{3})+(?![0-9]))/g, ',');
    return `${builtCharacteristic}.${mantissa}`;
  },
  /**
  * Create a number from this currency formatted String
  * @return{Number} - A Number representation of this String
  */
  fromCurrency() {
    return Number(this.replace(/,/g, ''));
  },
  /**
  * @return{String} - Returns each alphabetic character in this String
  * as an inverse of its current case
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
  * @return{String} - Returns the alphabetic characters in this String
  * in alternating cases, starting with a lower case
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
  * Fetch characters in the middle of a String. Double character for
  * even length String and single character for odd length String
  * @return{String} - The character(s) in the middle of the string
  */
  getMiddle() {
    const halfLength = Math.floor(this.length / 2);
    if (this.length % 2 === 0) { // String with even length
      return this.substring(halfLength - 1, halfLength + 1);
    }
    // String with odd length
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
      numberText[match]);
    return convertedString.replace(/\s$/, '');
  },
  /**
  * Checks if a String is a digit (one number)
  * @return{Boolean} - True if the String is a single digit
  * False otherwise
  */
  isDigit() {
    const match = /^[0-9]$/;
    return match.test(this);
  },
  /**
  * Returns true if this String contains any character repeated twice
  * in a sequence (including whitespace characters)
  * @return{Boolean} - True if this String contains double characters
  * otherwise False
  */
  doubleCheck() {
    const match = /(.)\1/g;
    return match.test(this);
  }
};

// Assign new methods to the String class
Object.assign(String.prototype, stringExtension);
