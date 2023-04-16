var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var displayItems=require('./routes/Display');
var createItems=require('./routes/Create');
var updateItems=require('./routes/UpdateInv');
var testdsp=require("./routes/test");
var addUser=require("./routes/SignupUser");
var Del =require('./routes/DeleteItem');
var signup=require('./routes/newuser');
var login=require('./routes/Login');
var getUser=require('./routes/GetUser');
const mongoose = require("mongoose");
const mongoosee = require("mongoose");
var app = express();
mongoose.connect("mongodb://mongo:27017/project");
///mongoosee.connect("mongodb+srv://venkatagowtham:Gowtham0511@cluster0.vovfdye.mongodb.net/Signup");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Inventory',displayItems);
app.use('/create',createItems);
app.use('/UpdateInv',updateItems);
app.use('/test',testdsp);
app.use('/DeleteItem',Del);
app.use('/newuser',signup);
app.use('/addUser',addUser);
app.use('/loginUser',login);
app.use('/getUser',getUser);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use("/inv",require("./routes/invroute"));
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
