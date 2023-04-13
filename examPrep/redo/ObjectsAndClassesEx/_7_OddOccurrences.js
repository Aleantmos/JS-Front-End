function solve(input) {

    const words = input.split(' ');
    
    const odds = {};

    for (const word of words) {
        let wordToLowerCase = word.toLowerCase();

        if (!odds[wordToLowerCase]) {
            odds[wordToLowerCase] = 0;
        }

        odds[wordToLowerCase]++;
    }

    let result = [];
    let sorted = Object.entries(odds).sort((a, b) => b[1] - a[1]);

    for(const [key,value] of sorted) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')