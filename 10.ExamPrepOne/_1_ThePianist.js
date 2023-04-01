function pianist(input) {

    let n = Number(input.shift());

    let piecesCollection = {};
    let commandParser = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changeKey,
    };

    for (let i = 0; i < n; i++) {
        const [ piece, composer, key ] = input.shift().split('|');
        piecesCollection[piece] = { composer, key }


    }

    for (const inputLine of input) {
        if (inputLine === 'Stop') {
            break;
        }

        const commandLineTokens = inputLine.shift().split('|');
        let command = commandLineTokens[0];

        commandParser[command](...commandLineTokens.slice(1))
    }

    for (const piece in piecesCollection) {
        const { key, composer } = piecesCollection[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }
        
    function addPiece(piece, composer, key) {
        if (!piecesCollection.hasOwnProperty(piece)) {
            piecesCollection[piece] = { composer, key }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        } else {
            console.log(`${piece} is already in collection!`)
        }
    }

    function removePiece(piece) {
        if (piecesCollection.hasOwnProperty(piece)) {
            delete piecesCollection[piece]
            console.log(`Successfully remove pieace ${piece}!`)
        } else {
            console.log(`Invalid opetration! ${piece} does not exist in the collection.`)
        }
    }

    function changeKey(piece, newKey) {
        if (piecesCollection.hasOwnProperty(piece)) {
            piecesCollection[piece].key = newKey;
            console.log(`Change the key of ${piece} to ${newKey}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    function checkProperty(pieace) {
        return piecesCollection.hasOwnProperty(pieace);
    }


}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )