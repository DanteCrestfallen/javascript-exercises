const leapYears = function(year) {
    let isDivisibleByFour = (element => { 
        return element % 4 == 0; 
    });

    let isDivisibleByOneHundred = (element => { 
        return element % 100 == 0; 
    });

    let isDivisibleByFourHundred = (element => { 
        return element % 400 == 0; 
    });

    return (isDivisibleByFour(year) && !isDivisibleByOneHundred(year) || isDivisibleByFourHundred(year));
};

// Do not edit below this line
module.exports = leapYears;
