function solve(text, word) {

    let arr = text.split(" ");

    while(text.includes(word)) {
        text = text.replace(word, "*".repeat(word.length));
    }

    console.log(text);
}

solve('A small sentence with some words',

'small')