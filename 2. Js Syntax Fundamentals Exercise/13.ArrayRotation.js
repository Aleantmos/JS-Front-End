function rotate(...arr) {

    let myArr = arr[0];
    let rotations = arr[1];
    if (myArr.length <= rotations) {
        rotations = (myArr.length) % rotations;
    }

    for (let index = 0; index < rotations; index++) {
        let first = myArr[0];    
        
        for (let index = 0; index < myArr.length - 1; index++) {
            myArr[index] = myArr[index + 1];
        }

        myArr[myArr.length - 1] = first; 
    }
    let result = myArr.join(" ");
    

    console.log(result);
}

rotate([51, 47, 32, 61, 21], 2)
