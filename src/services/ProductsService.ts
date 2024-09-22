import ProductServiceInterface from "../interfaces/ProductServiceInterfacr";
import Product from "../models/ProductInterface";
  
class ProductService implements ProductServiceInterface {
  private products: Product[] = 
  [
    {
      "id": 1,
      "title": "Apple EarPods",
      "price": 2927,
      "category": "Наушники",
      "img": "images/img1.png",
      "rate": 4.7,
      "currency": "₽"
    },
    {
      "id": 2,
      "title": "Apple AirPods",
      "price": 2327,
      "category": "Наушники",
      "img": "images/img2.png",
      "rate": 4.5,
      "currency": "₽"
    },
    {
      "id": 3,
      "title": "AirPods Pro",
      "price": 2327,
      "category": "Наушники",
      "img": "images/img3.png",
      "rate": 4.8,
      "currency": "₽"
    },
    {
      "id": 4,
      "title": "Xiaomi Redmi Note 11S",
      "price": 24990,
      "category": "Мобильные телефоны",
      "img": "images/img3.png",
      "rate": 4.3,
      "currency": "₽"
    },
    {
      "id": 5,
      "title": "Samsung Galaxy Tab A8",
      "price": 2299,
      "category": "Планшеты",
      "img": "images/img3.png",
      "rate": 4.5,
      "currency": "₽"
    },
    {
      "id": 6,
      "title": "iRobot Roomba i7+",
      "price": 6999,
      "category": "Планшеты",
      "img": "images/img3.png",
      "rate": 4.8,
      "currency": "₽"
    },
    {
      "id": 7,
      "title": "Xiaomi Mi TV P1 50",
      "price": 3499,
      "category": "Телевизоры",
      "img": "images/img3.png",
      "rate": 4.6,
      "currency": "₽"
    }
  ];
  
  async getProducts(): Promise<Product[]> {
    return this.products;
  }
  
}
  
export { Product, ProductService };