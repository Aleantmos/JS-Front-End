function AddressBook(arr) {
    let addressbook = {};

    for (line of arr) {
        let [ name, address ] = line.split(":");
        addressbook[name] = address;
    }

    let sorted = Object.keys(addressbook).sort();

    for (const element of sorted) {
        console.log(`${element} -> ${addressbook[element]}`)

    }
}

AddressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])