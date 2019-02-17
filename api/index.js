import express from 'express';
import bodyParser from 'body-parser';

// routes
import mealRoutes from './routes/meal.route';

const app = express();
const PORT = 9001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The API is working');
});

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', mealRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
