function solve(ch1, ch2, ch3) {

    let arr = [ch1, ch2, ch3];

    let reversed = arr.reverse();

    let result = reversed.join(" ");

    console.log(result);
}

solve('A', 'B', 'C');