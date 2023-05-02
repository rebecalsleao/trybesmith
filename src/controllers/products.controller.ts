import { Request, Response } from 'express';
import ProductsService from '../services/products.services';
import statusCodes from '../utils/statusCode';

class ProductsController {
  private productService: ProductsService = new ProductsService();

  constructor() {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;

    const addProduct = await this.productService.create(product);
    
    res.status(statusCodes.CREATED).json(addProduct);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const product = await this.productService.getAll();
    res.status(statusCodes.OK).json(product);
  }
}

export default ProductsController;