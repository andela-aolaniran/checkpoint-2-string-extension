// chai dependency
const assert = require('chai').assert;

// load string extension
require('../src/string-extension');

describe('String Extension', () => {
  describe('#hasVowels()', () => {
    it('should return typeof Boolean', () => {
      assert.typeOf(''.hasVowels(), 'boolean');
    });
    it(`should return True if the String contains any of the English vowel i
      n lower case`, () => {
        assert.isTrue('this'.hasVowels());
      });
    it(`should return True if the String contains any of the English vowel
     in upper case`, () => {
      assert.isTrue('thIs'.hasVowels());
     });
    it('should return False if the String does NOT contain any English vowel',
      () => {
        assert.isFalse('cnsnT '.hasVowels());
      });
    it('should return False for an empty String', () => {
      assert.isFalse(''.hasVowels());
    });
  });

  describe('#toUpper()', () => {
    it('should return typeof String', () => {
      assert.typeOf(''.toUpper(), 'string');
    });
    it('should return an uppercase version of the String', () => {
      assert.strictEqual('uppercase'.toUpper(), 'UPPERCASE');
    });
    it('should return the String with all alphabet characters in upper-case',
      () => {
        assert.strictEqual('8 13 a B c D 700  '.toUpper(), '8 13 A B C D 700  ');
      });
    it('should return and empty String for an empty String', () => {
      assert.strictEqual(''.toUpper(), '');
    });
  });

  describe('#toLower()', () => {
    it('should return typeof String', () => {
      assert.typeOf(''.toLower(), 'string');
    });
    it('should return a lower case version of the String', () => {
      assert.strictEqual('SayHello'.toLower(), 'sayhello');
    });
    it(`should return the String with all upper case alphabet characters 
      converted to lower case`, () => {
      assert.strictEqual('alphanumer1c HELL0 WorlD'.toLower(),
        'alphanumer1c hell0 world');
    });
    it('should return and empty String for an empty String', () => {
      assert.strictEqual(''.toLower(), '');
    });
  });

  describe('#ucFirst()', () => {
    it('should return typeof String', () => {
      assert.typeOf(''.ucFirst(), 'string');
    });
    it(`should return the String with only the first alphabet 
      character in upper-case`, () => {
      assert.strictEqual('aB cd Ef'.ucFirst(), 'AB cd Ef');
      assert.strictEqual('Ab cd Ef'.ucFirst(), 'Ab cd Ef');
    });
    it('should NOT modify the String if first character is NOT an alphabet',
     () => {
       assert.strictEqual('9 tImes 2 = 18'.ucFirst(), '9 tImes 2 = 18');
    });
    it('should return an empty String for an empty String', () => {
      assert.strictEqual(''.ucFirst(), '');
    });
  });

  describe('#isQuestion()', () => {
    it('should return typeof Boolean', () => {
      assert.typeOf(''.isQuestion(), 'boolean');
    });
    it(`should return True if the String is a question 
      (ends with a question mark)`, () => {
      assert.isTrue('what is your name ?'.isQuestion());
      assert.isTrue('?'.isQuestion());
    });
    it(`should return False if the String is not a question 
      (does NOT end with a question mark)`, () => {
      assert.isFalse('what is your name ? '.isQuestion());
      assert.isFalse('what is your name'.isQuestion());
    });
    it('should return False for empty Strings', () => {
      assert.isFalse(''.isQuestion());
    });
  });

  describe('#words()', () => {
    it('should return instanceof Array', () => {
      assert.isArray('say something'.words());
    });
    it('should return typeof Object', () => {
      typeof('say something'.words()) === 'object';
    });
    it('returns a list of words in the String', () => {
      assert.deepEqual('what are the words here 0 aa '.words(), [
        'what',
        'are',
        'the',
        'words',
        'here',
        '0',
        'aa'
      ]);
    });
    it('should NOT include white spaces as words in the String', () => {
      assert.notDeepEqual('what are '.words(), [
        'what',
        ' ',
        'are',
        ' '
      ]);
    });
    it('should treat single alphabet word as words', () => {
      assert.deepEqual(' a is a single word'.words(), [
        'a',
        'is',
        'a',
        'single',
        'word'
      ]);
    });
  });

  describe('#wordCount()', () => {
    it('should return typeof Number', () => {
      assert.isNumber('how many words have we got here ?'.wordCount());
    });
    it('should return the exact number of words in the String', () => {
      assert.strictEqual('hello world yahoo'.wordCount(), 3);
    });
    it('should count single characters as words', () => {
      assert.strictEqual('a '.wordCount(), 1);
    });
    it('should count non-alphabetic characters as words', () => {
      assert.strictEqual(' ? ^ * )) explain'.wordCount(), 5);
    });
  });

  describe('#toCurrency()', () => {
    it('should return typeof String', () => {
      assert.isString(''.toCurrency());
    });
    it('should return currency representation of the String', () => {
      assert.strictEqual('11111.11'.toCurrency(), '11,111.11');
    });
  });

  describe('#fromCurrency()', () => {
    it('should return typeof Number', () => {
      assert.isNumber('1000'.fromCurrency());
    });
    it(`should return a number representation for a properly
     formatted String`, () => {
      assert.strictEqual('11,111,111.11'.fromCurrency(), 11111111.11);
      assert.strictEqual('11,111.11'.fromCurrency(), 11111.11);
      assert.strictEqual('11111.11'.fromCurrency(), 11111.11);
    });
    it('should return NaN for a wrongly formatted String', () => {
      assert.isNaN('11e,111.11f'.fromCurrency());
      assert.isNaN('e111,200.00'.fromCurrency());
    });
    it('should return Zero (0) for an empty String', () => {
      assert.strictEqual(''.fromCurrency(), 0);
    });
  });

  describe('#inverseCase()', () => {
    it('should return typeof String', () => {
      assert.isString('word'.inverseCase());
    });
    it(`should return each alphabetic character in the string as an inverse
     of their current case`, () => {
      assert.strictEqual('Mr. Ben'.inverseCase(), 'mR. bEN');
      assert.strictEqual('Mr. Ben is 70 years Old'.inverseCase(),
       'mR. bEN IS 70 YEARS oLD');
     });
  });

  describe('#alternatingCase()', () => {
    it('should return typeof String', () => {
      assert.isString('word'.alternatingCase());
    });
    it('should return the letters in alternating case', () => {
      assert.strictEqual('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
    });
    it(`should return the alphabetic characters in alternating case igonring
     non-alphabetic characters`, () => {
      assert.strictEqual('rayM0-cheend'.alternatingCase(),
       'rAyM0-cHeEnD');
    });
    it('should always start with small case', () => {
      assert.strictEqual('bIGGy'.alternatingCase(), 'bIgGy');
    });
  });

  describe('#getMiddle()', () => {
    it('should return typeof String', () => {
      assert.isString('word'.getMiddle());
    });
    it('should return double characters for Strings with an even length',
      () => {
        assert.strictEqual('read'.getMiddle().length, 2);
      });
    it('should return single character for Strings with an odd length',
      () => {
        assert.strictEqual('reads'.getMiddle().length, 1);
      });
    it(`should return the correct character(s) at the 
      middle of the String`, () => {
        assert.strictEqual('reads'.getMiddle(), 'a');
        assert.strictEqual('read'.getMiddle(), 'ea');
      });
    it('should return an empty String for empty Strings', () => {
      assert.strictEqual(''.getMiddle(), '');
    });
  });

  describe('#numberWords()', () => {
    it('should return typeof String', () => {
      assert.isString('word'.numberWords());
    });
    it(`should return the String with all number characters converted
     to their english words`, () => {
      assert.strictEqual('325'.numberWords(), 'three two five');
    });
  });

  describe('#isDigit()', () => {
    it('should return typeof Boolean', () => {
      assert.isBoolean('1'.isDigit());
    });
    it('should return true for single digits', () => {
      assert.isTrue('3'.isDigit());
    });
    it('should return false for non-single digits', () => {
      assert.isFalse('34'.isDigit());
    });
    it('should return false for non-numeric Strings', () => {
      assert.isFalse('Y'.isDigit());
      assert.isFalse('One'.isDigit());
    });
    it('should return false for alpha-numeric Strings', () => {
      assert.isFalse('9F'.isDigit());
    });
    it('should return false for empty Strings', () => {
      assert.isFalse(''.isDigit());
    });
  });

  describe('#doubleCheck()', () => {
    it('should return typeof Boolean', () => {
      assert.isBoolean('aa'.doubleCheck());
    });
    it('should return True if the String contains double characters',
      () => {
        assert.isTrue('aa, !!'.doubleCheck());
    });
    it('should return True for double space characters',
      () => {
        assert.isTrue('  contains double space'.doubleCheck());
    });
    it(`should return False if the String does NOT contain double 
      characters`, () => {
      assert.isFalse('heloworld'.doubleCheck());
    });
    it('should return false for empty Strings', () => {
      assert.isFalse(''.doubleCheck());
    });
  });
});

