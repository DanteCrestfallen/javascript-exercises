const fibonacci = function(num) {
    if(num < 0) {
        return 'OOPS';
    }
    
    let list = [0, 1];
    for(let i = list.length; i <= num; i++) {
        list[i] = list[i-2] + list[i-1];
    }
    return list[num];
};

// Do not edit below this line
module.exports = fibonacci;
