function charsInRange(char1, char2) {

    const getFirstCharAscii = (char) => char.charCodeAt(0);
    let ascii1 = getFirstCharAscii(char1);
    let ascii2 = getFirstCharAscii(char2);

    let start;
    let end;

    if (ascii1 > ascii2) {
        start = ascii2;
        end = ascii1
    } else {
        start = ascii1;
        end = ascii2;
    }

    let chars = [];

    for (let index = start + 1; index < end; index++) {
        chars.push(String.fromCharCode(index))
    }

    console.log(chars.join(" "))

}

charsInRange('#',':')