function getBiggest(n1, n2, n3) {
    let arr = [n1, n2, n3];

    let max = arr.reduce((a, b) => Math.max(a,b))

    console.log(max)
}

getBiggest(1,2,3);