function provision(stockData, orderedData) {

    let products = [];

    for (let i = 0; i < stockData.length; i += 2) {
            productName = stockData[i];
            quantity = Number(stockData[i+1]);

            products[productName] = quantity;
    }

    

    for (let i = 0; i < orderedData.length; i += 2) {

        let productName = orderedData[i];
        let quantity = Number(orderedData[i + 1]);

        if (productName in products) {
            products[productName] += quantity
        } else {
            products[productName] = quantity;
        }
    }

    for (const productName in products) {
        console.log(`${productName} -> ${products[productName]}`);
    }
}

provision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )