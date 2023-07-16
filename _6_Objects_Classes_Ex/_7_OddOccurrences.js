function solve(input) {
    let arr = input.split(" ");

    let words = {}

    for (const word of arr) {
        let toLower = word.toLowerCase();
        if (!words[toLower]) {
            words[toLower] = 0;
        }
        words[toLower]++;
    }

    let result = [];

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sorted) {
        if (value % 2 === 1) {
            result.push(key);
        }
    }

    console.log(result.join(" "));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')