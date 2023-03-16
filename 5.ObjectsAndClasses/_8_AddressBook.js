function addressBook(input) {
    
    let addresses = [];

    for (let addressInfo of input) {
        let [name, address] = addressInfo.split(":");

        addresses[name] = address;
    }

    let sorted = Object.keys(addresses);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let name of sorted) {
        console.log(`${name} -> ${addresses[name]}`)
    }
}

addressBook(['Bob:Huxley Rd','John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])