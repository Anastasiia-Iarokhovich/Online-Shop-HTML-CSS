import CartProductServiceInterface from "../interfaces/CartProductServiceInterface";
import { Product } from "./ProductsService";
    
class CartProductService implements CartProductServiceInterface {
    // private cartProducts: Product[] = [];
    count:number = 0;

    addCartProduct(product: Product): void {
        // this.cartProducts.push(product);

        const selectedProducts = loadFromSessionStorage('selectedProducts') ?? [];
        selectedProducts.push(product);
        saveToSessionStorage('selectedProducts', selectedProducts);
    }
    
    async getCartProducts(): Promise<Product[]> {
        //   return this.cartProducts;
        return loadFromSessionStorage('selectedProducts');
    }

    deleteCartProduct(id: number): void {
        const selectedProducts = loadFromSessionStorage('selectedProducts');

        const index = selectedProducts.findIndex((product: { id: number; }) => product.id === id);

        if (index !== -1) {
            selectedProducts.splice(index, 1);
            saveToSessionStorage('selectedProducts', selectedProducts);
        }
    }
    
    increaseCount() {
        this.count++;
    }

    decreaseCount() {
        this.count--;
    }

    getCount() {
        return this.count;
    }
}
    
export { CartProductService };

function saveToSessionStorage(key:any, value:Product[]) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to store data in session storage: ${error}`);
    }
}
  
function loadFromSessionStorage(key:any) {
    try {
        const storedData = sessionStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error(`Failed to retrieve data from session storage: ${error}`);
        return null;
    }
}