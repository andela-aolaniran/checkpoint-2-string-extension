# checkpoint-2-string-extension
[![Coverage Status](https://coveralls.io/repos/github/andela-aolaniran/checkpoint-2-string-extension/badge.png?branch=develop)](https://coveralls.io/github/andela-aolaniran/checkpoint-2-string-extension?branch=develop) [![Build Status](https://travis-ci.org/andela-aolaniran/checkpoint-2-string-extension.png?branch=develop)](https://travis-ci.org/andela-aolaniran/checkpoint-2-string-extension)

An extension of the javascript String class. Using Prototype Oriented Programming, more String manipulation features
are added to the String class.

### Methods added
1. hasVowels() - Returns a Boolean (True if this String contains an English vowel, otherwise False)
2. toUpper() - Returns this String with all it's lower case English alphabets converted to upper case
3. toLower() - Returns this String with all it's upper case English alphabets converted to lower case
4. ucFirst() - Returns this String but changes the first character (if it's an English alphabet) to an upper case
5. isQuestion() -  Returns a Boolean (True if the string ends with a question mark, otherwise False.
6. words() - Returns a list of the words in the String, as an Array
7. wordCount() - Returns the number of words in the string
8. toCurrency() - Returns a currency representation of the String.
9. fromCurrency() - Returns a number representation of the Currency String
10. inverseCase() -  Returns each of the English letter in the string as an inverse of its current case
11. alternatingCase() - Returns the letters in alternating cases, starting with a lower case.
12. getMiddle() - Returns the character(s) in the middle of the string
13. numberWords() - Returns the numbers in words e.g 325 should return three two five
14. isDigit() - Returns a Boolean. True if the String is a digit(one number), otherwise False
15. doubleCheck() - Returns a Boolean. True if the String contains double characters(including whitespace character), otherwise False.

### Contributing
1. Fork this repository
2. Clone your repository
3. Create your feature branch
4. Commit your changes
5. Push to the remote branch
6. Open a Pull Request


License
----

MIT