let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

// Atividade 1
function addProduct(product) {
    products.push(product);
}

// Atividade 2
function removeProductsOutOfStock() {
    products.forEach((product, index) => {
        if (product.quantity <= 0) {
            products.splice(index, 1);
        }
    });
}

// Atividade 3
function getStockOfAllProducts() {
    let totalStock = 0;
    
    products.forEach(product => {
        totalStock += product.quantity;
    });
    // Alternativa
    // utilizando reduce

    return totalStock;
}

// Atividade 4
function getProductsByPriceGreaterThen(greater) {
    return products.filter(product => product.price > greater);
}

// Atividade 5
function getProductsByNameContains(letter) {
    return products.filter(product => product.name.includes(letter));
}
function logProductsName(products) {
    products.forEach(product => {
        console.log(product.name);
    });
}

addProduct({name: 'Televisor', price: 900, quantity: 2, colors: ['black', 'white']});

removeProductsOutOfStock();

console.log("Atividade 3");
console.log(getStockOfAllProducts());

console.log("Atividade 4");
console.log(getProductsByPriceGreaterThen(30));

console.log("Atividade 5");
logProductsName(getProductsByNameContains('o'));
