function solveMe(text, word) {
    let cnt = 0;

    let arr = text.split(" ");

    arr.forEach(element => {
        if (element === word) {
            cnt++;
        }
    })

    console.log(cnt);
}

solveMe('This is a word and it also is a sentence',

'is')