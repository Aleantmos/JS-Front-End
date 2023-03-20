function wordsTracker(input) {

    let searchedWords = input.shift().split(" ");

    let words = {};

    for (const word of searchedWords) {
        let count = input.filter((w) => w === word).length;

        words[word] = count;
    }

    let sortedWords = words.Object.entries(words)
        .sort((wordA, wordB) => {
            let [_nameA, countA] = wordA;
            let [_nameB, countB] = wordB;

            return countB - countA
        });


    for (const word of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}