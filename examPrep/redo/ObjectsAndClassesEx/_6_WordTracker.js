function solve(input) {
    let searched = input.shift();
    let wordsToFind = searched.split(' ');


    let wordsBank = input;

    let tracker = [];

    for (const word of wordsToFind) {
        tracker[word] = 0;
    }

    wordsBank
        .forEach(element => {
            for (const key in tracker) {

                if (element === key) {
                    tracker[key] += 1;
                } else if (element === key) {
                    tracker[key] += 1;
                }
            }
        });

    for (const key in tracker) {
        console.log(`${key} - ${tracker[key]}`)
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)