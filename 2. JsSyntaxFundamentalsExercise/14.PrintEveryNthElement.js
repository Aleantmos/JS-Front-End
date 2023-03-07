function printhN(...arr){

    let myArr = arr[0];
    let nTh = arr[1];

    let toPrint = [];

    for (let index = 0; index < myArr.length; index++) {
    
        if (index % nTh == 0) {
            toPrint.push(myArr[index]);
        }
        
    }

    for (let index = 0; index < toPrint; index++) {
        toPrint[index] = "`" + toPrint[index] + "`";
    }
    let result = toPrint.join(", ");

    console.log(`[${result}]`)

}

printhN(['dsa', 'asd', 'test', 'tset'], 2)