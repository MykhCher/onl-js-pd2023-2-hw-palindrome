'use strict';

function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

function isPalindrome(text) {
    const filteredText = text.toLowerCase().replaceAll(' ', '');
    return filteredText === reverseString(filteredText);
}

let text = 'Три психи пили Пилипихи спирт';
console.log(isPalindrome(text));