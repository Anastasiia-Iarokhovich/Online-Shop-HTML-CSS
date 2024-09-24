import { Product } from "../services/ProductsService";

interface CartProductServiceInterface {
    getCartProducts(): Promise<Product[]>;
    addCartProduct(product: Product): void;
    deleteCartProduct(id: number): void;
}

export default CartProductServiceInterface;