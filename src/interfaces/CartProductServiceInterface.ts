import { Product } from "../services/ProductsService";

interface CartProductServiceInterface {
    getCartProducts(): Promise<Product[]>;
    addCartProduct(product: Product): void;
}

export default CartProductServiceInterface;