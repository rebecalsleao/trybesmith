import { Pool } from 'mysql2/promise';
import OrderInterface from '../interfaces/orders.interface';

class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrders(): Promise<OrderInterface[]> {
    const databaseSearch = `SELECT orders.id, orders.user_id as userId,
    JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products as products
    ON products.order_id = orders.id
    GROUP BY orders.id`;

    const [result] = await this.connection.execute(databaseSearch);
    return result as OrderInterface[];
  }
}

export default OrderModel;
