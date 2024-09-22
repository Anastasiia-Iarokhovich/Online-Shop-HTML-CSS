import { Product } from "../services/ProductsService";

interface ProductServiceInterface {
    getProducts(): Promise<Product[]>;
}

export default ProductServiceInterface;