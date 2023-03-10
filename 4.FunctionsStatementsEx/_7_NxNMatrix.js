function matrix(num) {

    let currNum = num;

    let result = [];
    for (let index = 0; index < num; index++) {
        let row = "";
        let arr = [];
        for (let index = 0; index < num; index++) {
            arr.push(currNum);
        }
        row = arr.join(" ");

        result[index] = row; 
    }

    result.forEach(row => {
        console.log(row);
    });
}

matrix(7);