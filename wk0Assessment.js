//Task 1: Repeating Numbers
var repeatNumbers = function(data) {
    // My solution
    str = ""
    a = 0;
    //Going through each element of the 'data' array
    data.forEach(function(x){
        var num = [];
        var st = "";
        /*Adding the 1st value of the sub-array to a 
        new array 'num' the number of times specified by 
        the 2nd value in the sub-array*/
        for(var i = 0; i < data[a][1]; i++) {
            num.push(data[a][0])
        }
        /* Addding each element in the 'num' array
        to the 'st' string*/
        num.forEach(function(x){
            st += x;
        });
        /* Separating each set of values by a comma 
        except for the last set of values*/
        if(a == data.length - 1){
            str += st;
        } else {
            str += st + ", ";
        };
        a++;
    });
    return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//Task 2: Conditional Sums
var conditionalSum = function(values, condition) {
    // My code
    for x in values
};
  
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));