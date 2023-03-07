function revealWords(words, sentence) {
    let wordAsArray = words.split(", ");
    let mySentence = sentence.split(" ");
    
    wordAsArray.forEach(word => {
        let wordLength = word.length;
        mySentence.forEach((element, index) => {
            let compare = "*".repeat(wordLength);
            if (element === compare) {
                mySentence[index] = word;
            }
        });
    })

    let finalSentence = mySentence.join(" ");
    console.log(finalSentence);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')