import { Request, Response } from 'express';
import OrderService from '../services/orders.services';
import statusCodes from '../utils/statusCode';

class OrderController {
  private orderService: OrderService = new OrderService();

  constructor() {
    this.getAllOrders = this.getAllOrders.bind(this);
  }

  async getAllOrders(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAllOrders();
    
    res.status(statusCodes.OK).json(orders);
  }
}

export default OrderController;
