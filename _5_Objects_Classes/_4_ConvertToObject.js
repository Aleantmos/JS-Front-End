function convertToObject(input) {
  let object = JSON.parse(input);

  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
