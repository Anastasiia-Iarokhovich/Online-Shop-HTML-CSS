interface ProductInterface {
    id: number;
    title: string;
    price: number;
    category: string;
    img: string;
    rate: number;
    currency: string;
}

class Product implements ProductInterface {
    constructor(public id: number, public title: string, public rate: number, public price: number, public category: string, public img: string, public currency: string) {}
}

export default Product;