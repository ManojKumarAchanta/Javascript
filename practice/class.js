class Products{
    constructor(name.price){
        this.name =name;
        this.price = price;
    }
    displayProduct(){
        console.log((`Product: ${this.name}`));
        console.log((`Product Price: ${this.price.toFixed(2)}`));
    }
}
const product1 = new Products("shirt",19.99);
const product2 = new Products("pants",22.59);
const product3 = new Products("Unerwear",100);

product3.displayProduct();
product2.displayProduct();
product1.displayProduct();