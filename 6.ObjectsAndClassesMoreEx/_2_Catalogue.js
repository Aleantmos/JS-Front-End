function catalogue(input) {

    class Product {
        constructor(name, price) {
            this.pName = name;
            this.pPrice = price;
        }
    }
 
    let products = [];

    let cnt = input.length;
    for (let index = 0; index < cnt; index++) {
        let currProductInfo = input[index].split(" : ");
        
        let name = currProductInfo[0];
        let price = currProductInfo[1];

        let product = new Product(name,price);
        products.push(product);
    }
    
    products.sort((p1, p2) => {
        if (p1.name && p2.name) {
            return p1.name.localeCompare(p2.name);
        }
        return 0;
    });

    let output = "";
    let currLetter = "";

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let name = product.pName;
        let price = product.pPrice;

        let firstLetter = name.charAt(0).toUpperCase();

        if (firstLetter !== currLetter) {
            currLetter = firstLetter;
            output += `${currLetter}\n`;
        }

        output += `${name}: ${price}\n`;
    }

    console.log(output);
}


catalogue([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ])