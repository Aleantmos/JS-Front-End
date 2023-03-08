function Orders(product, quantity) {


    let price = 0;
    switch (product) {
        case "water":
            price = 1;
            break;
        case "coffee":
            price = 1;
            break;
        case "coke":
            price = 1;
            break;
        case "snacks":
            price = 1;
            break;
    }

    let total = price * quantity;

    console.log(total.toFixed(2));
}

Orders("water", 5);