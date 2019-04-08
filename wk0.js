var conditionalSum = function(values, condition) {
    // My code
    var num = 0;
    for (var i = 0; i < values.length; i++) {
        if(condition === "even"){
            if((values[i]) % 2 === 0){
                num += values[i]
            }            
        }else if (condition === "odd"){
            if((values[i]) % 2 !== 0){
                num += values[i]
            }
        }else {
            return 0;
        }
    }
    return num
};
  
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));