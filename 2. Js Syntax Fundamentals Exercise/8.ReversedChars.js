function ReversedChars(a, b, c) {

    let arr =[a, b, c];

    arr.reverse;
    let result = "";

    for (let index = arr.length - 1; index >= 0; index--) {
        
        result = result.concat(arr[index])
    }

    console.log(result);
}

ReversedChars('A','B','C')