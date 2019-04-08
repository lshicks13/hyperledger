//Task 1: Repeating Numbers
var repeatNumbers = function(data) {
    // My solution
    var num = []
    var st = ""
    console.log(data.length)
    //for(i=0;i<data.length;i++){

        for(a=0;a<data[0][1];a++) {
            num.push(data[0][0])
        }
        num.forEach(function(x){
            st += x;
        });

    //}
    //console.log(data.length);
    return st;
    /*for(i=0;i<data[dlen1][1];i++) {
        num.push(data[0][0])
    }
    num.forEach(function(x){
        st += x;
    });
    //console.log(data.length);
    return st;*/
  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));