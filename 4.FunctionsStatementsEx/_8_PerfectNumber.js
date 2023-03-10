function perfect(num) {

    let myNum = num;

    let sum = 0;

    let divisors = [];

    for (let index = 0; index < myNum; index++) {
        if(num % index === 0) {
            sum += index;
        }
        
    }


    if (sum === myNum) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

perfect(1236498);