const sumAll = function(...args) {
    let hasNegativesOrNonNumbers = args.some(element => {
        return element < 0 || typeof element != 'number'; 
    })

    if(hasNegativesOrNonNumbers) {
        return 'ERROR'; 
    }

    let sum = 0;
    for(let i=Math.min(...args); i<=Math.max(...args); i++){
        sum += i; 
    }
    return sum;    
};

// Do not edit below this line
module.exports = sumAll;
