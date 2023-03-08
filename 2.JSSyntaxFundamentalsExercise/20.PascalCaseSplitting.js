function pascalCase(text) {

    let characters = text.split("");
    let output = "";

    for (let symbol of characters) {
        let char = symbol.charCodeAt();

        if (char >= 65 && char <= 90) {
            if (output.length > 0) {
                output += ", "
            }
            output += symbol;
        } else {
            output += symbol;
        }
    }

    console.log(output)
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')