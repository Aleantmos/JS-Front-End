function substring(input, start, count) {
    let result;
    let end = count + 1;

    result = input.substring(start, end);

    console.log(result);
}

substring('ASentence', 1, 8);