function extract(content) {
  const element = document.getElementById(content);

  let text = element.textContent;

  let splitted = text.split("");

  let extracted = [];

  let curr = 0;
  let end = splitted.length;

  let startingIndex = -1;
  let endingIndex = -1;

  while (curr < end) {
    if (text.charAt(curr) === "(") {
      startingIndex = curr + 1;
    }

    if (text.charAt(curr) === ")") {
      endingIndex = curr - 1;

      let element = text.substring(startingIndex, endingIndex + 1);
      extracted.push(element);
      startingIndex = -1;
      endingIndex = -1;
    }

    curr++;
  }
  
  let result = "";
  result = extracted.join("; ")

  console.log(result);

  return result;
}
