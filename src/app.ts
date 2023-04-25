import express from 'express';
// import ProductsRoutes from './routes/products.route';
import ProductsController from './controllers/products.controller';

const app = express();

app.use(express.json());

const productController = new ProductsController();

// app.use('/products', ProductsRoutes);
app.post('/products', productController.createProduct.bind(productController));

export default app;
