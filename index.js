const express =  require('express');
const cors =  require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')



const app = express();
const port = process.env.PORT ||3000;
app.use(express.json()); //middleware

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback)=>{
    if(whitelist.includes(origin)||!origin){
      callback(null, true);
    }else{
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());//middleware

app.get('/api', (req, res)=>{
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('Server running on port ' + port);
});
