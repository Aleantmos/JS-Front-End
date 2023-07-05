function solve(n, arr) {

    let subArr = arr.slice(0, n);

    let resultArr = [];

    subArr.forEach(element => {
        resultArr.unshift(element);
    });

    let output = resultArr.join(" ");

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);