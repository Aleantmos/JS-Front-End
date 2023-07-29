function editElement(h1, match, replaces) {


    let string = h1.textContent;

    //let result = text.replace(new RegExp(match, 'g'), replaces);

    let result = string.replace(match, replaces);

    h1.textContent = result;
}