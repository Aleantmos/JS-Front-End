function substring(word, sentance) {

    let compare = word.toLowerCase();

    let sentanceToLower = sentance.toLowerCase();
    
    if (sentanceToLower.includes(compare)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

substring('javascript','JavaScript is the best programming language')