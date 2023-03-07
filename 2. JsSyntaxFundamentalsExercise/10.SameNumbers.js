function SameNumbers(num) {

    let compare = num % 10;
    let isTheSame = true;

    let sum = 0;

    while(num != 0) {

        let curDigit = num % 10;
        
        num = Math.floor(num / 10);


        if (curDigit != compare && isTheSame == true) {
            isTheSame = false;
        }

        sum += curDigit;
    }
    console.log(`${isTheSame}\n${sum}`);
}

SameNumbers(1234)