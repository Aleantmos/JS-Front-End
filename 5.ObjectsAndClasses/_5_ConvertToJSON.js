function convertToJSON(name, lastName, hairColor) {
    let person = {};

    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let personToJson = JSON.stringify(person);

    console.log(personToJson);
}

convertToJSON('George', 'Jones','Brown')