import { Request, Response } from 'express';
import ProductsService from '../services/products.services';
import statusCodes from '../statusCode';

class ProductsController {
  private productService: ProductsService = new ProductsService();

  async createProduct(req: Request, res: Response): Promise<void> {
    const product = req.body;

    const addProduct = await this.productService.create(product);
    res.status(statusCodes.CREATED).json(addProduct);
  }
}

export default ProductsController;