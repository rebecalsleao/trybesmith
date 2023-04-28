import ProductsModel from '../models/products.model';
import ProductsInterface from '../interfaces/products.interface';
import connection from '../models/connection';

class ProductsService {
  model: ProductsModel;

  constructor() {
    console.log('env', process.env.MYSQL_PASSWORD, process.env.MYSQL_HOST);

    this.model = new ProductsModel(connection);
  }

  async create(product: ProductsInterface): Promise<ProductsInterface> {
    const addProduct = await this.model.create(product);

    return addProduct;
  }

  async getAll(): Promise<ProductsInterface[]> {
    const product = await this.model.getAll();
    return product;
  }
}

export default ProductsService;
