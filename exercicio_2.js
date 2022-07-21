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
    { name: 'Monitor', price: 200, quantity: 3, colors: [] }
]

// Atividade 1
function setProductsId() {
    products.forEach((product, index) => {
        product.id = index + 1;
    });
}

// Atividade 2
function logProductsName() {
    products.forEach((product) => {
        console.log(product.name);
    });
}    

// Atividade 3
function getProductById(id) {
    // Alternativa Ives
    // products[id = 3]
    return products.find(product => product.id == id);
}

// Atividade 4
function getProductsByColor(reqColor) {
    let blackProducts = products.filter(product => {
        return product.colors.find(color => color == reqColor)
    });
    return blackProducts;
}

// Atividade 5
function getProductsWithoutColors() {
    let noColorProducts = products.filter(product => {
        return product.colors.length === 0;
    });
    return noColorProducts;
}

setProductsId();

console.log("Atividade 2");
logProductsName();

console.log("Atividade 3");
console.log(getProductById(3));

console.log("Atividade 4");
console.log(getProductsByColor('black'));

console.log("Atividade 5");
console.log(getProductsWithoutColors());