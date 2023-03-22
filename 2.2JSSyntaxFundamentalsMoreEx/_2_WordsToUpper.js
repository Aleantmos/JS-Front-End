function wordsUpper(input) {
    let elements = input.split(" ");
    let resultArray = [];
    for (const element of elements) {
        let symbols = element.split("");
        let result = "";

        for (let symbol of symbols) {
            symbol = symbol.toUpperCase();
            let asciiNumber = symbol.charCodeAt(0);
            if ((asciiNumber >= 65 && asciiNumber <= 90)) {
                result += symbol;
            }
        }
        resultArray.push(result);
    }

    let output = resultArray.join(", ")
    console.log(output);
}

wordsUpper('hello');