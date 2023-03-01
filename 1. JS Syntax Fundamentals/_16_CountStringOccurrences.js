function occurrences(sentence, comparedWord) {
    let words = sentence.split(" ");
    let cnt = 0;

    for (let word of words) {
        if (word === comparedWord) {
            cnt++;
        }
    }

    console.log(cnt);
}

occurrences('This is a word and it also is a sentence', 'is')