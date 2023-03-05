const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const userRoutes = require('./routes/user');
const careerRoutes = require('./routes/career');
const consultRoutes = require('./routes/consultation');

mongoose.set('strictQuery', false);
mongoose.connect(
  'mongodb+srv://ayushmaurya461:'+ 
  process.env.MONGO_ATLAS_PW +
  '@cluster0.kk1o1w0.mongodb.net/?retryWrites=true&w=majority',
  {}
);

mongoose.Promise = global.Promise;

app.use(morgan('dev'));

// making uploads folder publically visible/static
app.use('/uploads', express.static('uploads'));
//body-parser parsing the incoming request bodies in a middleware before you handle it
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Handling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Access-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/user', userRoutes);
app.use('/career', careerRoutes);
app.use('/consultation', consultRoutes);

//Error handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error)
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error : {
          message: error.message
      }
  })
})

module.exports = app;

// mongodb+srv://ayushmaurya461:<password>@cluster0.kk1o1w0.mongodb.net/?retryWrites=true&w=majority