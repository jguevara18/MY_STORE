const express =  require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const Users = require('./users.router');
const NuevaRuta = require('./nuevaRuta.router')




function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);// se crea una ruta general
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', Users);
  router.use('/nueva-ruta', NuevaRuta);
}

module.exports = routerApi;
