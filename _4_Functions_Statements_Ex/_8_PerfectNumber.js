result = (n) => {
    let sum = 0;
    let num = n;
        for (let i = 0; i < n; i++) {
            if (num % i === 0)  {
                sum += i;
            }           
        }

        if (sum == n) {
            console.log("We have a perfect number!")
        } else {
            console.log("It's not so perfect.")
        }
}

result(6);