function convertToJSON(firstName, lastName, hairColor) {
  let object = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };

  let result = JSON.stringify(object);

  console.log(result);
}

convertToJSON("George", "Jones", "Brown");
