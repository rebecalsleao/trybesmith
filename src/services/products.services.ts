import ProductsInterface from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';
import connection from '../models/connection';

class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async create(product: ProductsInterface): Promise<ProductsInterface> {
    const addProduct = await this.model.create(product);
    
    return addProduct;
  }

  async getAll(): Promise<ProductsInterface[]> {
    console.log('CHEGOU NO SERVICE');
    const product = await this.model.getAll();
    return product;
  }
}

export default ProductsService;
