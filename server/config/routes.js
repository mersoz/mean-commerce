const router = require('express').Router();
const productsController = require('../controllers/products');

// router.route('/api/products')
//   .get(productsController.index);
  // .post(productsController.create);
  // .delete(productsController.delete);

  // router.route('/products')
  //   .get(productsController.index)
  //   .post(productsController.create);


// router.route('/products/:id')
//   .get(productsController.show);
  // .put(productsController.update)

  // app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

  // router.get('/', function(req,res) {
  //   res.sendFile('./src/views/index.html');
  // });

// catch all 404 response
// router.all('/', (req, res) => res.sendFile(`../client/js/views/index.html`));

module.exports = router;
