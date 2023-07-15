function solve(arr1, arr2) {
  let store = {};

  class Product {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
  }

  for (let i = 0; i < arr1.length - 1; i += 2) {
    let curr = new Product(arr1[i], Number(arr1[i + 1]));
    store[curr.name] = curr;
  }

  for (let i = 0; i < arr2.length - 1; i += 2) {
    if (store.hasOwnProperty(arr2[i])) {
      store[arr2[i]].quantity += Number(arr2[i + 1]);
    } else {
      let curr = new Product(arr2[i], Number(arr2[i + 1]));
      store[arr2[i]] = curr;
    }
  }

  for (const productName in store) {
    const product = store[productName]
    console.log(`${product.name} -> ${product.quantity}`)
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
