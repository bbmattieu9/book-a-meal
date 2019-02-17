import OrderService from '../services/order-service';

const OrderController = {
  fetchAllOrders(req, res) {
    const allOrders = OrderService.fetchAllOrder();
    return res
      .json({
        status: 'success',
        data: allOrders,
      })
      .status(200);
  },

  addNewOrder(req, res) {
    const createThisNewOrder = req.body;
    const theNewlyCreatedOrder = OrderService.addMeal(createThisNewOrder);
    return res
      .json({
        status: 'success',
        data: theNewlyCreatedOrder,
      })
      .status(201);
  },

  getASingleOrderById(req, res) {
    const usingThisId = req.params.id;
    const theSingleOrderFound = OrderService.getAMeal(usingThisId);
    return res
      .json({
        status: 'success',
        data: theSingleOrderFound,
      })
      .status(200);
  },
};
export default OrderController;
