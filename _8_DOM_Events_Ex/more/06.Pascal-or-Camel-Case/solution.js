function solve() {
  const text = document.querySelector("#text").value;
  const converter = document.querySelector("#naming-convention").value;

  const resultarea = document.querySelector("#result");

  let output = [];
  
  console.log(text);
  console.log(converter);

  let splitted = text.split(" ");


  if (converter === "Camel Case") {
    splitted.forEach((el,index) => {
      if (index === 0) {
        output.push(el.toLowerCase());
      } else {
        output.push(el.charAt(0).toUpperCase() + el.slice(1));
      }
    });
  } else if (converter === "Pascal Case") {
    splitted.forEach((el) => {
      output.push(el.charAt(0).toUpperCase() + el.slice(1));
    });
  } else {
    output.push("Error");
  }

  resultarea.textContent = output.join("");
}
