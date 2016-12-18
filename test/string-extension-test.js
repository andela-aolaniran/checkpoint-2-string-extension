// chai dependency
const assert = require('chai').assert;

// load string extension
require('../src/string-extension');


describe('String Extension', () => {
  describe('#hasVowels()', () => {
    it('should return typeof Boolean');
    it('should return True if the String contains any of the English vowel in lower case');
    it('should return True if the String contains any of the English vowel in upper case');
    it('should return False if the String does NOT contain any English vowel');
    it('should return False for an empty String');
  });

  describe('#toUpper()', () => {
    it('should return typeof String');
    it('should return an uppercase version of the String');
    it('should return the String with all alphabet characters in upper-case');
    it('should NOT throw and exception for Strings containing non-alphabetic characters');
    it('should return and empty String for an empty String');
  });

  describe('#toLower()', () => {
    it('should return typeof String');
    it('should return a lower case version of the String');
    it('should return the String with all upper case alphabet characters converted to lower case');
    it('should NOT throw exception for Strings containing non-alphabetic characters');
    it('should return and empty String for an empty String');
  });

  describe('#ucFirst()', () => {
    it('should return typeof String');
    it('should return the String with only the first alphabet character in upper-case');
    it('should NOT modify the String if the first character is NOT and alphabet');
    it('should return an empty String for an empty String');
    it('should NOT throw and exception if the first character is NOT an alphabet');
  });

  describe('#isQuestion()', () => {
    it('should return typeof Boolean');
    it('should return True if the String is a question (ends with a question mark');
    it('should return False if the String is not a question (does NOT end with a question mark');
    it('should return False for empty Strings');
    it('should NOT throw an exception for empty Strings');
  });

  describe('#words()', () => {
    it('should return instanceof Array');
    it('should return typeof Object');
    it('returns a list of words in the String');
    it('should NOT includes white spaces as words in the String');
    it('should treat single characters as words');
    it('should return an empty Array for empty Strings');
  });

  describe('#wordCount()', () => {
    it('should return typeof Number');
    it('should return the exact number of words in the String');
    it('should count single characters as words');
    it('should  NOT count white spaces as words');
    it('should count non-alphabetic characters as words');
  });

  describe('#toCurrency()', () => {
    it('should return typeof String');
    it('should return currency representation of the String');
  });

  describe('#fromCurrency()', () => {
    it('should return typeof Number');
    it('should return a number representation for a properly formatted String');
    it('should return NaN for a wrongly formatted String');
    it('should NOT throw an Exception for an invalid String');
    it('should return NaN for an empty String');
  });

  describe('#inverseCase()', () => {
    it('should return typeof String');
    it('should return each alphabetic character in the string as an inverse of their current case');
    it('should not throw an exception for Strings containing non-alphabetic character');
    it('should return an empty String for empty Strings');
  });

  describe('#alternatingCase()', () => {
    it('should return typeof String');
    it('should return the alphabetic characters in alternating cases');
    it('should start with small case');
    it('should not throw an exception for Strings containing non-alphabetic characters');
    it('should continue the alternating pattern even if non-alphabetic characters exists within the String');
  });

  describe('#getMiddle()', () => {
    it('should return typeof String');
    it('should return double characters for Strings with an even length');
    it('should return single character for Strings with an odd length');
    it('should return the correct character(s) (space inclusive) at the middle of the String');
    it('should return an empty String for empty Strings');
  });

  describe('#numberWords()', () => {
    it('should return typeof String');
    it('should return the String with all number characters converted to their english words');
  });

  describe('isDigit', () => {
    it('should return typeof Boolean');
    it('should return true for single digits');
    it('should return false for non-single digits');
    it('should return false for non-numeric Strings');
    it('should return false for alpha-numeric Strings');
  });

  describe('doubleCheck', () => {
    it('should return typeof Boolean');
    it('should return True if the String contains double characters');
    it('should return False if the String does NOT contatain double characters');
    it('should return false for empty Strings');
  });

});
