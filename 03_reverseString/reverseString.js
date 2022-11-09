const reverseString = function(word) {
    let rWord = '';
    for(let i=word.length-1; i >= 0; i--) {
        rWord += word[i];
    }
    return rWord;
};

// Do not edit below this line
module.exports = reverseString;
