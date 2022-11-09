const repeatString = function(word, times) {
    let repeat = '';
    if(times < 0){
        return 'ERROR';
    }

    for(let i=1; i<= times; i++) {
        repeat += word;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
