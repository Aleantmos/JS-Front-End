function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";

  const inputDOMSelectors = {
    product: document.getElementById('product'),
    count: document.getElementById('count'),
    price: document.getElementById('price')
  };

  const otherDOMSelectors = {
    addBtn: document.getElementById('add-product'),
    updateBtn: document.getElementById('update-product'),
    loadBtn: document.getElementById('load-product'),
    productContainer: document.getElementById('tbody'),
    form: document.querySelector('.list')
  };

  let currentProducts = [];
  let productToEdit = {};

  otherDOMSelectors.loadBtn.addEventListener('click', loadAllProductsHandler);
  otherDOMSelectors.updateBtn.addEventListener('click', updateProductHandler);
  otherDOMSelectors.addBtn.addEventListener('click', addProductHandler);

  function loadAllProductsHandler(event) {
    if (event) {
        event.preventDefault();
    }

    otherDOMSelectors.productContainer.innerHTML = "";

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((allProductsRes) => {
            currentProducts = Object.values(allProductsRes)
            for (const { product, count, price, _id } of currentProducts) {
                const tr = createElement('tr', '', otherDOMSelectors.productContainer);
                tr.id = _id;
                createElement('td', `${product}`, tr, '', ['name']);
                createElement('td', `${count}`, tr, '', ['count-product']);
                createElement('td', `${price}`, tr, '', ['product-price']);
                const buttons = createElement('td', '', tr, '', ['btn']);

                const updateBtn = createElement('button', 'Update', buttons, '', ['update']);
                updateBtn.addEventListener('click', loadProductHandler);
                
                const deleteBtn = createElement('button', 'Delete', buttons, '', ['delete']);
                deleteBtn.addEventListener('click', deleteProductHandler);
            }
        })

  }

  function updateProductHandler(e) {
    e.preventDefault();

    const { product,count, price } = inputDOMSelectors;
    const payload = JSON.stringify({
        product: product.value,
        count: count.value,
        price: price.value
    });

    const httpHeader = {
        method: 'PATCH',
        body: payload
    }

    fetch(`${BASE_URL}${productToEdit._id}`, httpHeader)
        .then(() => {
            loadAllProductsHandler()
            otherDOMSelectors.addBtn.removeAttribute('disabled')
            otherDOMSelectors.updateBtn.setAttribute('disabled', true);
            otherDOMSelectors.form.reset ();
        })
        .catch((err) => {
            console.log(err);
        })

  }
  
  function loadProductHandler() {
    const id = this.parentNode.parentNode.id;

    productToEdit = currentProducts.find((p) => p._id === id);

    for (const key in inputDOMSelectors) {
        inputDOMSelectors[key].value = productToEdit[key];
    }
    otherDOMSelectors.addBtn.setAttribute('disabled', true);
    otherDOMSelectors.updateBtn.removeAttribute('disabled');
  }

  function deleteProductHandler() {
    const id = this.parentNode.parentNode.id;
    const httpHeaders = {
        method: 'DELETE',
    }

    fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadAllProductsHandler(e));
  }

  function addProductHandler(e) {
    e.preventDefault();
    const { product,count, price } = inputDOMSelectors;
    const payload = JSON.stringify({
        product: product.value,
        count: count.value,
        price: price.value
    });

    const httpHeaders = {
        method: 'Post',
        body: payload
    };

    fetch(BASE_URL, httpHeaders)
        .then(() => {
            loadAllProductsHandler();
            otherDOMSelectors.form.reset();
        })
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type === "input") {
      htmlElement.value = content;
    }

    if (content && type !== "input") {
      htmlElement.textContent = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}

attachEvents();
