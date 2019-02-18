import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';
import orderRoutes from './routes/order.route';
import menuRoutes from './routes/menu.route';


const app = express();
const PORT = 9001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The API is working');
});

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/menu', menuRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
