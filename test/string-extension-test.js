// chai dependency
const assert = require('chai').assert;

// load string extension
require('../src/string-extension');

// class to hold our test values
const testValues = {
  emptyString: '',
  nonEmptyString: 'Not Empty',
  lowerCaseVowelWord: 'this',
  uppercaseVowelWord: 'thIs',
  noVowelWord: 'cNst',
  mixedStringLowerCase: '122for *8e3$&^34',
  mixedStringUpperCase: '122FOR *8E3$&^34',
  lowerCaseWord: 'abcdef',
  upperCaseWord: 'ABCDEF',
  firstLetterUppercase: 'Abcdef',
  firstLetterLowercase: 'aBCDEF',
  question: 'What is your name ?',
  questionArray: ['What', 'is', 'your', 'name', '?'],
  validCurrencyString: '1111111.1111',
  validThreeDigitCurrencyString: '111',
  invalidCurrencyString: '11111.1111.111a',
  currencyFormatedString: '1,111,111.1111',
  doubleCharactersWord: 'hello',
  doubleSpaceWord: '  dignity',
  digitString: '5',
  doubleDigitString: '10',
  evenLengthWord: 'even',
  oddLengthWord: 'seven'
};

describe('String Extension', () => {
  describe('#hasVowels()', () => {
    it('should return typeof Boolean for any String', () => {
      // check empty string
      assert.typeOf(testValues.emptyString.hasVowels(), 'boolean');
      // check a non-empty string
      assert.typeOf(testValues.nonEmptyString.hasVowels(), 'boolean');
    });
    it(`should return True if the String contains any of the English vowel in
     lower case`, () => {
        assert.isTrue(testValues.lowerCaseVowelWord.hasVowels());
      });
    it(`should return True if the String contains any of the English vowel
     in upper case`, () => {
      assert.isTrue(testValues.uppercaseVowelWord.hasVowels());
     });
    it('should return False if the String does NOT contain any English vowel',
      () => {
        assert.isFalse(testValues.noVowelWord.hasVowels());
      });
    it('should return False for an empty String', () => {
      assert.isFalse(testValues.emptyString.hasVowels());
    });
  });

  describe('#toUpper()', () => {
    it('should return typeof String for any String', () => {
      assert.typeOf(testValues.emptyString.toUpper(), 'string');
      assert.typeOf(testValues.mixedStringUpperCase.toUpper(), 'string');
      assert.typeOf(testValues.mixedStringLowerCase.toUpper(), 'string');
    });
    it('should return an uppercase version of the String', () => {
      assert.strictEqual(testValues.lowerCaseWord.toUpper(),
       testValues.upperCaseWord);
    });
    it(`should return the String with only all alphabet characters in 
    upper-case`,() => { 
      assert.strictEqual(testValues.mixedStringLowerCase.toUpper(),
       testValues.mixedStringUpperCase);
    });
    it('should return and empty String for an empty String', () => {
      assert.strictEqual(testValues.emptyString.toUpper(),
       testValues.emptyString);
    });
  });

  describe('#toLower()', () => {
    it('should return typeof String for any String', () => {
      assert.typeOf(testValues.emptyString.toLower(), 'string');
      assert.typeOf(testValues.mixedStringLowerCase.toLower(), 'string');
      assert.typeOf(testValues.mixedStringUpperCase.toLower(), 'string');
    });
    it('should return a lower case version of the String', () => {
      assert.strictEqual(testValues.upperCaseWord.toLower(),
       testValues.lowerCaseWord);
    });
    it(`should return the String with all upper case alphabets 
      converted to lower case`, () => {
      assert.strictEqual(testValues.mixedStringUpperCase.toLower(),
        testValues.mixedStringLowerCase);
    });
    it('should return and empty String for an empty String', () => {
      assert.strictEqual(testValues.emptyString.toLower(),
       testValues.emptyString);
    });
  });

  describe('#ucFirst()', () => {
    it('should return typeof String for any String', () => {
      assert.typeOf(testValues.emptyString.ucFirst(), 'string');
      assert.typeOf(testValues.mixedStringLowerCase.ucFirst(), 'string');
      assert.typeOf(testValues.mixedStringUpperCase.ucFirst(), 'string');
    });
    it(`should return the String with only the first 
      character (if it's an alphabet) converted to upper case`, () => {
      assert.strictEqual(testValues.firstLetterLowercase.ucFirst(), 'ABCDEF');
    });
    it('should NOT modify the String if the first character is NOT an alphabet',
     () => {
       assert.strictEqual(testValues.mixedStringUpperCase.ucFirst(),
        testValues.mixedStringUpperCase);
    });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(testValues.emptyString.ucFirst(),
       testValues.emptyString);
    });
  });

  describe('#isQuestion()', () => {
    it('should return typeof Boolean for any String', () => {
      assert.typeOf(testValues.emptyString.isQuestion(), 'boolean');
      assert.typeOf(testValues.mixedStringLowerCase.isQuestion(), 'boolean');
      assert.typeOf(testValues.mixedStringUpperCase.isQuestion(), 'boolean');
    });
    it(`should return True if the String is a question 
      (ends with a question mark)`, () => {
      assert.isTrue(testValues.question.isQuestion());
    });
    it(`should return False if the String is not a question 
      (does NOT end with a question mark)`, () => {
      assert.isFalse(testValues.mixedStringLowerCase.isQuestion());
      assert.isFalse(testValues.mixedStringUpperCase.isQuestion());
    });
    it('should return False for empty Strings', () => {
      assert.isFalse(testValues.emptyString.isQuestion());
    });
  });

  describe('#words()', () => {
    it('should return instanceof Array for any String', () => {
      assert.isArray(testValues.mixedStringLowerCase.words());
      assert.isArray(testValues.emptyString.words());
      assert.isArray(testValues.mixedStringUpperCase.words());
    });
    it('returns a correct list of words in the String', () => {
      assert.deepEqual(testValues.question.words(), testValues.questionArray);
    });
  });

  describe('#wordCount()', () => {
    it('should return typeof Number for any String', () => {
      assert.isNumber(testValues.emptyString.wordCount());
      assert.isNumber(testValues.mixedStringLowerCase.wordCount());
    });
    it('should return the exact number of words in the String', () => {
      assert.strictEqual(testValues.question.wordCount(), 5);
    });
    it('should count non-alphabetic characters as words', () => {
      assert.strictEqual(testValues.mixedStringLowerCase.wordCount(), 2);
    });
  });

  describe('#toCurrency()', () => {
    it('should return typeof String for a valid String', () => {
      assert.isString(testValues.validCurrencyString.toCurrency());
    });
    it('should throw an error for invalid Strings', () => {
      assert.throws(() => {
        testValues.invalidCurrencyString.toCurrency();
      });
    });
    it('should NOT throw an error for a Valid String', () => {
      assert.doesNotThrow(() => {
        testValues.validCurrencyString.toCurrency();
      });
    });
    it('should return currency representation of any valid String', () => {
      assert.strictEqual(testValues.validCurrencyString.toCurrency(),
       '1,111,111.1111');
      assert.strictEqual(testValues.validThreeDigitCurrencyString.toCurrency(),
       '111.00');
    });
  });

  describe('#fromCurrency()', () => {
    it('should return typeof Number', () => {
      assert.isNumber(testValues.currencyFormatedString.fromCurrency());
      assert.isNumber(testValues.invalidCurrencyString.fromCurrency());
      assert.isNumber(testValues.emptyString.fromCurrency());
    });
    it(`should return a number representation for a properly
     formatted String`, () => {
      assert.strictEqual(testValues.currencyFormatedString.fromCurrency(),
       1111111.1111);
    });
    it('should return NaN for a wrongly formatted String', () => {
      assert.isNaN(testValues.invalidCurrencyString.fromCurrency());
    });
    it('should return Zero (0) for an empty String', () => {
      assert.strictEqual(testValues.emptyString.fromCurrency(), 0);
    });
  });

  describe('#inverseCase()', () => {
    it('should return typeof String for any String', () => {
      assert.isString(testValues.mixedStringLowerCase.inverseCase());
      assert.isString(testValues.mixedStringUpperCase.inverseCase());
      assert.isString(testValues.currencyFormatedString.inverseCase());
      assert.isString(testValues.emptyString.inverseCase());
    });
    it(`should return each alphabetic character in the string as an inverse
     of their current case`, () => {
      assert.strictEqual(testValues.noVowelWord.inverseCase(), 'CnST');
      assert.strictEqual(testValues.mixedStringLowerCase.inverseCase(),
       '122FOR *8E3$&^34');
     });
  });

  describe('#alternatingCase()', () => {
    it('should return typeof Stringfor any String', () => {
      assert.isString(testValues.mixedStringLowerCase.alternatingCase());
      assert.isString(testValues.mixedStringUpperCase.alternatingCase());
      assert.isString(testValues.emptyString.alternatingCase());
    });
    it('should return the alphabets in alternating case', () => {
      assert.strictEqual(testValues.oddLengthWord.alternatingCase(), 'sEvEn');
    });
    it(`should return the alphabetic characters in alternating case igonring
     non-alphabetic characters`, () => {
      assert.strictEqual(testValues.mixedStringLowerCase.alternatingCase(),
       '122fOr *8E3$&^34');
    });
    it('should always start with small case alphabet', () => {
      assert.strictEqual(testValues.evenLengthWord.alternatingCase(), 'eVeN');
    });
  });

  describe('#getMiddle()', () => {
    it('should return typeof String for any String', () => {
      assert.isString(testValues.mixedStringLowerCase.getMiddle());
      assert.isString(testValues.emptyString.getMiddle());
      assert.isString(testValues.mixedStringUpperCase.getMiddle());
    });
    it('should return double characters for Strings with an even length',
      () => {
        assert.strictEqual(testValues.evenLengthWord.getMiddle().length, 2);
      });
    it('should return single character for Strings with an odd length',
      () => {
        assert.strictEqual(testValues.oddLengthWord.getMiddle().length, 1);
      });
    it(`should return the correct character at the 
      middle of the String for any String of even length`, () => {
      assert.strictEqual(testValues.evenLengthWord.getMiddle(), 've');
    });
    it(`should return the correct characters at the middle of the 
    String for any String of odd length`, () => {
      assert.strictEqual(testValues.oddLengthWord.getMiddle(), 'v');
    });
    it('should return an empty String for empty Strings', () => {
      assert.strictEqual(testValues.emptyString.getMiddle(),
       testValues.emptyString);
    });
  });

  describe('#numberWords()', () => {
    it('should return typeof String for any String', () => {
      assert.isString(testValues.mixedStringLowerCase.numberWords());
      assert.isString(testValues.emptyString.numberWords());
      assert.isString(testValues.mixedStringUpperCase.numberWords());
    });
    it(`should return the String with all number characters converted
     to their english words`, () => {
      assert.strictEqual(testValues.doubleDigitString.numberWords(),
       'one zero');
    });
  });

  describe('#isDigit()', () => {
    it('should return typeof Boolean for any String', () => {
      assert.isBoolean(testValues.emptyString.isDigit());
      assert.isBoolean(testValues.mixedStringLowerCase.isDigit());
      assert.isBoolean(testValues.mixedStringUpperCase.isDigit());
    });
    it('should return True for single digits', () => {
      assert.isTrue(testValues.digitString.isDigit());
    });
    it('should return False for non-single digits', () => {
      assert.isFalse(testValues.doubleDigitString.isDigit());
    });
    it('should return false for non-numeric Strings', () => {
      assert.isFalse(testValues.lowerCaseWord.isDigit());
    });
    it('should return false for alpha-numeric Strings', () => {
      assert.isFalse(testValues.mixedStringLowerCase.isDigit());
      assert.isFalse(testValues.mixedStringUpperCase.isDigit());
    });
    it('should return false for empty Strings', () => {
      assert.isFalse(testValues.emptyString.isDigit());
    });
  });

  describe('#doubleCheck()', () => {
    it('should return typeof Boolean for any String', () => {
      assert.isBoolean(testValues.emptyString.doubleCheck());
      assert.isBoolean(testValues.mixedStringLowerCase.doubleCheck());
      assert.isBoolean(testValues.mixedStringUpperCase.doubleCheck());
    });
    it('should return True if the String contains double characters',
      () => {
        assert.isTrue(testValues.doubleCharactersWord.doubleCheck());
    });
    it('should return True for double space characters',
      () => {
        assert.isTrue(testValues.doubleSpaceWord.doubleCheck());
    });
    it(`should return False if the String does NOT contain double 
      characters`, () => {
      assert.isFalse(testValues.lowerCaseWord.doubleCheck());
    });
    it('should return false for empty Strings', () => {
      assert.isFalse(testValues.emptyString.doubleCheck());
    });
  });
});

