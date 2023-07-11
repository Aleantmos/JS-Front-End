function solve(c1, c2) {
  const getCharAscii = (char) => char.charCodeAt(0);

  let ascii1 = getCharAscii(c1);
  let ascii2 = getCharAscii(c2);

  let start = Math.min(ascii1, ascii2);
  let end = Math.max(ascii1, ascii2);

  let chars = [];
  chars = getAsciiInBetween(start, end, chars);

  console.log(chars.reverse().join(" "));

  function getAsciiInBetween(cnt, end, chars) {
    if (cnt === end - 1) {
      return;
    }

    cnt = cnt + 1;
    getAsciiInBetween(cnt, end, chars);

    chars.push(String.fromCharCode(cnt));

    return chars;
  }
}

solve("#", ":");
