import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRouter from './routes/productRoute.js';
import orderRouter from './routes/orderRoute.js';
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';
import notFound from './middlewares/notFound.js';

const products = productRouter;
const orders = orderRouter;
const port = process.env.PORT || 8000;

const app = express();

// CORS middleware
app.use(cors());

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(morgan('dev'));
app.use(logger);

// routes
app.use('/api/products', products);
app.use('/api/orders', orders);

app.get('/', (req, res) => {
  res.send('Hello, Thi!');
});

// error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));