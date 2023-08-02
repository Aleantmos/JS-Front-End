function playlist (input) {

    let cnt = input.shift();
    let start = 0;

    let songs = {};

    while (start < cnt) {
        let line = input.shift();
        let parts = line.split('|');

        let song = {
            composer: parts[1],
            key: parts[2]
        };
        
        songs[parts[0]] = song;
        start++;
    }

    let curr = 0;
    while(input[curr] !== "Stop") {
        let line = input[curr].split('|');
        
        let command = line.shift();
        let piece = line[0];

        if (command === "Add") {
            if (pieceIsInCollection(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                let song = {
                    composer: line[1],
                    key: line[2],
                }
                songs[piece] = song;

                console.log(`${piece} by ${songs[piece].composer} in ${songs[piece].key} added to the collection!`)
            }

        } else if (command === "Remove") {
            if (pieceIsInCollection(piece)) {
                delete songs[piece];
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (command === "ChangeKey") {
            if (pieceIsInCollection(piece)) {
                songs[piece].key.value = line[2];
                console.log(`Changed the key of ${piece} to ${songs[piece].key}`)
            }
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }

        curr++;
    }


    for (const piece in songs) {
        console.log(`${piece} -> Composer: ${songs[piece].composer}, Key: ${songs[piece].key}`)
    }

    function pieceIsInCollection(piece) {
        // for (const currPiece in songs) {
        //     if (currPiece === piece) {
        //         return true;
        //     }
        // }
        // return false;

        return songs.hasOwnProperty(piece)
    }
 
   
}

playlist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
)