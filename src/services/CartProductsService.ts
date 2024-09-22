import CartProductServiceInterface from "../interfaces/CartProductServiceInterface";
import ProductServiceInterface from "../interfaces/ProductServiceInterfacr";
import { Product } from "./ProductsService";

    
class CartProductService implements CartProductServiceInterface {
    private cartProducts: Product[] = [];

    addCartProduct(product: Product): void {
        this.cartProducts.push(product);
    }
    
    async getCartProducts(): Promise<Product[]> {
      return this.cartProducts;
    }
    
}
    
export { CartProductService };