function largest(args) {
    let largestNum = Number.NEGATIVE_INFINITY;
    args.forEach(element => {
        if (element > largestNum) {
            largestNum = element;
        }
    });

    console.log(largestNum);
}

largest([-3, -5, -22.5])