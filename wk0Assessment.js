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

//Task 3: Talking Calendar
var talkingCalendar = function(date) {
    // My code
    var y = date.slice(0,4);
    var m = Number(date.slice(5,7)) - 1;
    var d = date.slice(8,10);
    var dt = new Date(y,m,d);
    var opt = { month: 'long'};
    var mth = new Intl.DateTimeFormat('en-US', opt).format(dt);
    if (dt.getDate() % 10 == 1 && dt.getDate() != 11) {
        d += 'st';
        if(dt.getDate() < 4){
            d = d[1] + 'st'
        }
    } else if(dt.getDate() % 10 == 2 && dt.getDate() != 12) {
        d += 'nd'
        if(dt.getDate() < 4){
            d = d[1] + 'nd'
        }
    } else if(dt.getDate() % 10 == 3 && dt.getDate() != 13) {
        d += 'rd'
        if(dt.getDate() < 4){
            d = d[1] + 'rd'
        }
    } else {
        d += 'th'
    }
    return mth + " " + d + ", " + y;
};
  
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));