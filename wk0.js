var conditionalSum = function(values, condition) {
    // Your code here
    eNum = 0;
    oNum = 0;
    for (var i = 0; i < values.length; i++) {
        if(condition === "even" && values[i] % 2 === 0){
            
           eNum += values[i];
            console.log(eNum);
        }else if (condition === "odd" && values[i] % 2 === !0){
            return oNum += values[i];
        }else {
            return 0;
        }
    }
};
  
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));