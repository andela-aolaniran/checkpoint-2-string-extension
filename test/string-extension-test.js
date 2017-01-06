'use strict';

// chai dependency
const assert = require('chai').assert;

// load string extension
require('../src/string-extension');

const emptyWord = '';
const alphaNumericWord = 'abcdefgh1234567890';
const mixedCharactersWord = '~!@are a#$%^&&8()+_hfhf  ea~!';
const regularWord = 'Hello';
let testValue;
let expectedValue;

describe('String Extension', () => {
  describe('#hasVowels()', () => {
    it('should return typeof Boolean for any String', () => {
      assert.typeOf(emptyWord.hasVowels(), 'boolean');
      assert.typeOf(regularWord.hasVowels(), 'boolean');
      assert.typeOf(mixedCharactersWord.hasVowels(), 'boolean');
      assert.typeOf(alphaNumericWord.hasVowels(), 'boolean');
    });
    it(`should return True if the String contains any of the English vowel in
     lower case`, () => {
      testValue = 'CHAI there is god o';
      assert.isTrue(testValue.hasVowels());
    });
    it(`should return True if the String contains any of the English vowel
     in upper case`, () => {
      testValue = 'chai there is god O';
      assert.isTrue(testValue.hasVowels());
    });
    it('should return False if the String does NOT contain any English vowel',
      () => {
        testValue = 'cnst';
        assert.isFalse(testValue.hasVowels());
      });
    it('should return False for an empty String', () => {
      assert.isFalse(emptyWord.hasVowels());
    });
  });

  describe('#toUpper()', () => {
    it('should return typeof String for any String', () => {
      assert.typeOf(emptyWord.toUpper(), 'string');
      assert.typeOf(regularWord.toUpper(), 'string');
      assert.typeOf(mixedCharactersWord.toUpper(), 'string');
      assert.typeOf(alphaNumericWord.toUpper(), 'string');
    });
    it('should return an uppercase version of the String', () => {
      testValue = 'make me upper case';
      expectedValue = 'MAKE ME UPPER CASE';
      assert.strictEqual(testValue.toUpper(),
       expectedValue);
    });
    it(`should return the String with only all alphabet characters in 
    upper-case`, () => {
      testValue = '~ hello world 123';
      expectedValue = '~ HELLO WORLD 123';
      assert.strictEqual(testValue.toUpper(),
       expectedValue);
    });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(emptyWord.toUpper(),
       emptyWord);
    });
  });

  describe('#toLower()', () => {
    it('should return typeof String for any String', () => {
      assert.typeOf(emptyWord.toLower(), 'string');
      assert.typeOf(mixedCharactersWord.toLower(), 'string');
      assert.typeOf(alphaNumericWord.toLower(), 'string');
      assert.typeOf(regularWord.toLower(), 'string');
    });
    it('should return a lower case version of the String', () => {
      testValue = 'AZEEZ';
      expectedValue = 'azeez';
      assert.strictEqual(testValue.toLower(),
       expectedValue);
    });
    it(`should return the String with ONLY all upper case alphabets 
      converted to lower case`, () => {
      testValue = '12 AbCdEfGh';
      expectedValue = '12 abcdefgh';
      assert.strictEqual(testValue.toLower(),
      expectedValue);
    });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(emptyWord.toLower(),
       emptyWord);
    });
  });

  describe('#ucFirst()', () => {
    it('should return typeof String for any String', () => {
      assert.typeOf(emptyWord.ucFirst(), 'string');
      assert.typeOf(mixedCharactersWord.ucFirst(), 'string');
      assert.typeOf(alphaNumericWord.ucFirst(), 'string');
      assert.typeOf(regularWord.ucFirst(), 'string');
    });
    it(`should return the String with only the first 
      character (if it's an alphabet) converted to upper case`, () => {
      testValue = 'hello';
      expectedValue = 'Hello';
      assert.strictEqual(testValue.ucFirst(), expectedValue);
    });
    it('should NOT modify the String if the first character is NOT an alphabet',
     () => {
       testValue = '1 hello';
       expectedValue = '1 hello';
       assert.strictEqual(testValue.ucFirst(),
       expectedValue);
     });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(emptyWord.ucFirst(),
       emptyWord);
    });
  });

  describe('#isQuestion()', () => {
    it('should return typeof Boolean for any String', () => {
      assert.typeOf(regularWord.isQuestion(), 'boolean');
      assert.typeOf(alphaNumericWord.isQuestion(), 'boolean');
      assert.typeOf(mixedCharactersWord.isQuestion(), 'boolean');
      assert.typeOf(emptyWord.isQuestion(), 'boolean');
    });
    it(`should return True if the String is a question 
      (ends with a question mark)`, () => {
      testValue = 'What is your name ?';
      assert.isTrue(testValue.isQuestion());
    });
    it(`should return False if the String is not a question 
      (does NOT end with a question mark)`, () => {
      testValue = 'this is not a question';
      assert.isFalse(testValue.isQuestion());
    });
    it('should return False for empty Strings', () => {
      assert.isFalse(emptyWord.isQuestion());
    });
  });

  describe('#words()', () => {
    it('should return instanceof Array for any String', () => {
      assert.isArray(regularWord.words());
      assert.isArray(emptyWord.words());
      assert.isArray(alphaNumericWord.words());
      assert.isArray(mixedCharactersWord.words());
    });
    it('returns a correct list of words in the String', () => {
      testValue = 'hello world it is a beautiful morning';
      expectedValue = ['hello', 'world', 'it', 'is', 'a',
        'beautiful', 'morning'];
      assert.deepEqual(testValue.words(), expectedValue);
    });
    it('returns an empty array for an empty String', () => {
      testValue = '';
      expectedValue = [];
      assert.deepEqual(testValue.words(), expectedValue);
    });
  });

  describe('#wordCount()', () => {
    it('should return typeof Number for any String', () => {
      assert.isNumber(emptyWord.wordCount());
      assert.isNumber(mixedCharactersWord.wordCount());
      assert.isNumber(regularWord.wordCount());
      assert.isNumber(alphaNumericWord.wordCount());
    });
    it('should return the exact number of words in the String', () => {
      testValue = 'five words in this sentence';
      expectedValue = 5;
      assert.strictEqual(testValue.wordCount(), expectedValue);
    });
    it('should count non-alphabetic characters as words', () => {
      testValue = `sentence with non-alphabetic characters 
      1 3 4 ! ? has 12 words`;
      expectedValue = 12;
      assert.strictEqual(testValue.wordCount(), expectedValue);
    });
    it('returns 0 for an empty String', () => {
      testValue = '';
      expectedValue = 0;
      assert.strictEqual(testValue.wordCount(), expectedValue);
    });
  });

  describe('#toCurrency()', () => {
    it('should return typeof String for a valid String', () => {
      testValue = '1000';
      assert.isString(testValue.toCurrency());
    });
    it('should throw an error for invalid Strings', () => {
      assert.throws(() => {
        testValue = '1000.00.00';
        testValue.toCurrency();
      });
    });
    it(`should throw an error for invalid Strings (Strings containing Symbols
     other than the decimal point and digits)`, () => {
      assert.throws(() => {
        testValue = '100000qg  @#@$';
        testValue.toCurrency();
      });
    });
    it(`should throw an error with the message 'Invalid String' (Strings 
    containing Symbols other than the decimal point and digits)`, () => {
      testValue = '100000qg  @#@$';
      expectedValue = Error('Invalid String');
      try {
        testValue.toCurrency();
      } catch (err) {
        assert.deepEqual(err, expectedValue);
        assert.strictEqual(err.message, expectedValue.message);
      }
    });
    it('should NOT throw an error for a Valid String', () => {
      assert.doesNotThrow(() => {
        testValue = '1000000.11';
        testValue.toCurrency();
      });
    });
    it('should return correct currency representation of a valid String',
     () => {
       testValue = '1111111.11';
       expectedValue = '1,111,111.11';
       assert.strictEqual(testValue.toCurrency(),
       expectedValue);
     });
  });

  describe('#fromCurrency()', () => {
    it('should return typeof Number', () => {
      assert.isNumber(emptyWord.fromCurrency());
      assert.isNumber(mixedCharactersWord.fromCurrency());
      assert.isNumber(regularWord.fromCurrency());
      assert.isNumber(alphaNumericWord.fromCurrency());
    });
    it(`should return a number representation for a properly
     formatted String`, () => {
      testValue = '1,111,111.11';
      expectedValue = 1111111.11;
      assert.strictEqual(testValue.fromCurrency(),
        expectedValue);
    });
    it('should return NaN for a wrongly formatted/invalid String', () => {
      testValue = '1,1111.111.111';
      assert.isNaN(testValue.fromCurrency());
    });
    it('should return Zero (0) for an empty String', () => {
      assert.strictEqual(emptyWord.fromCurrency(), 0);
    });
  });

  describe('#inverseCase()', () => {
    it('should return typeof String for any String', () => {
      assert.isString(regularWord.inverseCase());
      assert.isString(mixedCharactersWord.inverseCase());
      assert.isString(alphaNumericWord.inverseCase());
      assert.isString(emptyWord.inverseCase());
    });
    it(`should return each alphabetic character in the string as an inverse
     of their current case`, () => {
      testValue = 'aBcDeFgHiJk 123 f';
      expectedValue = 'AbCdEfGhIjK 123 F';
      assert.strictEqual(testValue.inverseCase(), expectedValue);
    });
  });

  describe('#alternatingCase()', () => {
    it('should return typeof String for any String', () => {
      assert.isString(regularWord.alternatingCase());
      assert.isString(alphaNumericWord.alternatingCase());
      assert.isString(mixedCharactersWord.alternatingCase());
      assert.isString(emptyWord.alternatingCase());
    });
    it('should return the alphabets in alternating case', () => {
      testValue = 'Seven';
      expectedValue = 'sEvEn';
      assert.strictEqual(testValue.alternatingCase(), expectedValue);
    });
    it(`should return the alphabetic characters in alternating case ignoring
     non-alphabetic characters`, () => {
      testValue = '1 2 3 4 5 six seven';
      expectedValue = '1 2 3 4 5 sIx SeVeN';
      assert.strictEqual(testValue.alternatingCase(),
       expectedValue);
    });
    it('should always start with small case alphabet', () => {
      testValue = 'Even';
      expectedValue = 'eVeN';
      assert.strictEqual(testValue.alternatingCase(), expectedValue);
    });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(emptyWord.alternatingCase(), emptyWord);
    });
  });

  describe('#getMiddle()', () => {
    it('should return typeof String for any String', () => {
      assert.isString(regularWord.getMiddle());
      assert.isString(emptyWord.getMiddle());
      assert.isString(mixedCharactersWord.getMiddle());
      assert.isString(alphaNumericWord.getMiddle());
    });
    it('should return double characters for Strings with an even length',
      () => {
        testValue = 'even';
        expectedValue = 2;
        assert.strictEqual(testValue.getMiddle().length, expectedValue);
      });
    it('should return single character for Strings with an odd length',
      () => {
        testValue = 'odd';
        expectedValue = 1;
        assert.strictEqual(testValue.getMiddle().length, expectedValue);
      });
    it(`should return the correct character at the 
      middle of the String for any String of even length`, () => {
      testValue = 'Yahoo!';
      expectedValue = 'ho';
      assert.strictEqual(testValue.getMiddle(), expectedValue);
    });
    it(`should return the correct characters at the middle of the 
    String for any String of odd length`, () => {
      testValue = 'character';
      expectedValue = 'a';
      assert.strictEqual(testValue.getMiddle(), expectedValue);
    });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(emptyWord.getMiddle(),
       emptyWord);
    });
  });

  describe('#numberWords()', () => {
    it('should return typeof String for any String', () => {
      assert.isString(regularWord.numberWords());
      assert.isString(emptyWord.numberWords());
      assert.isString(mixedCharactersWord.numberWords());
      assert.isString(alphaNumericWord.numberWords());
    });
    it(`should return the String with all number characters converted
     to their english words`, () => {
      testValue = '123';
      expectedValue = 'one two three';
      assert.strictEqual(testValue.numberWords(),
       expectedValue);
    });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(emptyWord.numberWords(), emptyWord);
    });
  });

  describe('#isDigit()', () => {
    it('should return typeof Boolean for any String', () => {
      assert.isBoolean(regularWord.isDigit());
      assert.isBoolean(mixedCharactersWord.isDigit());
      assert.isBoolean(alphaNumericWord.isDigit());
      assert.isBoolean(emptyWord.isDigit());
    });
    it('should return True for single digits', () => {
      testValue = '1';
      assert.isTrue(testValue.isDigit());
    });
    it('should return False for non-single digits', () => {
      testValue = '11';
      assert.isFalse(testValue.isDigit());
    });
    it('should return false for non-numeric Strings', () => {
      testValue = 'abcdef';
      assert.isFalse(testValue.isDigit());
    });
    it('should return false for alpha-numeric Strings', () => {
      assert.isFalse(alphaNumericWord.isDigit());
    });
    it('should return false for empty Strings', () => {
      assert.isFalse(emptyWord.isDigit());
    });
  });

  describe('#doubleCheck()', () => {
    it('should return typeof Boolean for any String', () => {
      assert.isBoolean(emptyWord.doubleCheck());
      assert.isBoolean(regularWord.doubleCheck());
      assert.isBoolean(alphaNumericWord.doubleCheck());
      assert.isBoolean(mixedCharactersWord.doubleCheck());
    });
    it('should return True if the String contains double characters',
      () => {
        testValue = 'Do not you give up !!';
        assert.isTrue(testValue.doubleCheck());
      });
    it('should return True for double space characters',
      () => {
        testValue = '  never give up';
        assert.isTrue(testValue.doubleCheck());
      });
    it(`should return False if the String does NOT contain double 
      characters`, () => {
      testValue = 'We do not have double characters here';
      assert.isFalse(testValue.doubleCheck());
    });
    it('should return false for empty Strings', () => {
      assert.isFalse(emptyWord.doubleCheck());
    });
  });
});
