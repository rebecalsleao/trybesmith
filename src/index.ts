import app from './app';
import ProductsRoutes from './routes/products.route';

const PORT = 3001;

app.use(ProductsRoutes);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,

));

export default server;
