const removeFromArray = function(list, ...args) {
  return list.filter(element => {
    return !args.includes(element)
  })
};

// Do not edit below this line
module.exports = removeFromArray;
