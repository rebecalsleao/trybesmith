import OrdersModel from '../models/orders.model';
import OrderInterface from '../interfaces/orders.interface';
import connection from '../models/connection';

class OrderService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAllOrders(): Promise<OrderInterface[]> {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}

export default OrderService;
