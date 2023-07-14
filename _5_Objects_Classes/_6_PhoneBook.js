function Phonebook(arr) {
  let phonebooklist = [];

  for (const element of arr) {
    let [name, phonenumber] = element.split(" ");
    phonebooklist[name] = phonenumber;
  }

  for (const [key, value] of Object.entries(phonebooklist)) {
    console.log(`${key} -> ${value}`);
  }
}



Phonebook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])