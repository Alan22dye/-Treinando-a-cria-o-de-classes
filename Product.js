class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity) {
        this.inStock += quantity;
    }

    calculateDiscount(discountPercentage) {
        return this.price - (this.price * (discountPercentage / 100));
    }
}

// Exemplo de uso:
const product1 = new Product('Notebook', 'Notebook Nitro 5', 1000.00);
product1.addToStock(10);
console.log(`Nome do produto: ${product1.name}`);
console.log(`Descrição do produto: ${product1.description}`);
console.log(`Valor do produto: R$${product1.price.toFixed(2)}`);
console.log(`Quantidade no estoque: ${product1.inStock}`);
console.log('==================================');
const discountedPrice = product1.calculateDiscount(5);
console.log(`Desconto no produto: 5%`);
console.log(`Novo valor do produto: R$${discountedPrice.toFixed(2)}`);
