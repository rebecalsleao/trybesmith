import { Pool, ResultSetHeader } from 'mysql2/promise';
import ProductsInterface from '../interfaces/products.interface';

export default class ProductsModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(addProduct: ProductsInterface): Promise<ProductsInterface> {
    const { name, amount } = addProduct;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const getId = result[0].insertId;

    return { id: getId, ...addProduct };
  }

  async getAll(): Promise<ProductsInterface[]> {
    const result: any[] = await this.connection
      .execute('SELECT * FROM Trybesmith.products');

    const products = result[0].map((row) => ({
      id: row.id,
      name: row.name,
      amount: row.amount,
      orderId: row.order_id,
    }));

    return products as ProductsInterface[];
  }
}
