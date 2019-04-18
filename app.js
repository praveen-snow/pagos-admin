var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var mongoose = require('mongoose');
var mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/pagos-product';
mongoose.connect(mongodb_uri)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var apiRouter = require('./routes/product');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/pagos-product')));
app.use('/products', express.static(path.join(__dirname, 'dist/pagos-product')));
app.use('/product-details/:id', express.static(path.join(__dirname, 'dist/pagos-product')));
app.use('/product-create', express.static(path.join(__dirname, 'dist/pagos-product')));
app.use('/product-edit/:id', express.static(path.join(__dirname, 'dist/pagos-product')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
