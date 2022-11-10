const palindromes = function (word) {
    let removePunctuationAndSpace = (element => {
        return element.replace(/[^A-Za-z0-9]/g, '');
    });

    word = removePunctuationAndSpace(word);

    let reverseWord = '';
    for(let i=word.length-1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return word.toLowerCase() === reverseWord.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
