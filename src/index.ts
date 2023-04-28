import { PORT } from './config';
import app from './app';

const server = app.listen(PORT, () =>
  console.log(`Server is running on PORT: ${PORT || 3002}`)
);

export default server;
