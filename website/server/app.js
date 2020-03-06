var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var commentsRouter = require('./routes/comments');
let imageRouter = require('./routes/images');

var app = express();
app.use(cors());

var dotenv = require('dotenv');
dotenv.config();
var url = "mongodb+srv://Pudelgulasch:pudelCluster34@cluster0-4fyqq.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true}).then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
  app.use(express.static(path.join(__dirname, 'build')));
      // view engine setup
      app.set('views', path.join(__dirname, 'views'));
      app.set('view engine', 'jade');
      
      app.use(logger('dev'));
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
      app.use(cookieParser());
      app.use(express.static(path.join(__dirname, 'public')));
      
      app.use('/', indexRouter);
      app.use('/comments', commentsRouter);
      app.use('/images', imageRouter);
      
      // app.get('*', (req, res) => {
      //     res.sendFile(path.join(__dirname, '/build', 'index.html'));
      //   });
        
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
        res.render('error');
        console.log('This is the invalid field ->', err.field)
      });
      
      module.exports = app;
      