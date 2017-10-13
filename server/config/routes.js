const router = require('express').Router();

const auth = require('../controllers/auth');
const users = require('../controllers/users');
const products = require('../controllers/products');
const orders = require('../controllers/orders');

const secureRoute = require('../lib/secureRoute');

router.route('/api/users')
  .all(secureRoute)
  .get(users.index)
  .post(users.create);

router.route('/api/users/:id')
  .all(secureRoute)
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/api/products')
  .get(products.index)
  .post(products.create);

router.route('/api/products/:id')
  .get(products.show)
  .put(products.update)
  .delete(products.delete);

router.route('/api/orders')
  // .all(secureRoute)
  .get(orders.index)
  .post(orders.create);

router.route('/api/orders/:id')
  // .all(secureRoute)
  .get(orders.show)
  .put(orders.update)
  .delete(orders.delete);

router.route('/api/register')
  .post(auth.register);

router.route('/api/login')
  .post(auth.login);

  // router.get('/*', function(req,res) {
    // res.sendFile(`/client/js/views/index.html`);
  // });

module.exports = router;
