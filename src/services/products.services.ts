import ProductsInterface from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';
import connection from '../connection';

class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async create(product: ProductsInterface): Promise<ProductsInterface> {
    const addProduct = await this.model.create(product);
    return addProduct;    
  }
}

export default ProductsService;
