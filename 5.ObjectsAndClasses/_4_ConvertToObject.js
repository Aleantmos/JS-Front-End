function convertToObject(jsonInput) {

    let person = JSON.parse(jsonInput);

    for (const key in person) {
        console.log(`${key}: ${data[key]}`)
    }
}

convertToObject(
    '{"name": "George", "age": 40, "town": "Sofia"}'
)