function reverse(revCnt, inputArr) {

    let newArr=[];

    for(let i=0; i<revCnt; i++) {
        let numToAdd = inputArr[i];
        newArr.push(numToAdd);
    }


    let output="";
    for(let i=newArr.length - 1; i>=0; i--) {
        output += newArr[i] + " ";
    }
    
    console.log(output);
}

reverse(4, [-1, 20, 99, 5]);
