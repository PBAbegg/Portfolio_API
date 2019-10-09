require('dotenv').config();
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//router middleware
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let profileRouter = require('./routes/profiles');
let projectRouter = require('./routes/projects');
let knowledgecatalogRouter = require('./routes/knowledgecatalog');
let workexperienceRouter = require('./routes/workexperience');
let skillsRouter = require('./routes/skills');
let educationRouter = require('./routes/education');
let referenceRouter = require('./routes/references');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//authentication
//authorization 

//routing middleware
app.use('/', indexRouter);
app.use('/profiles', profileRouter);
app.use('/projects', projectRouter);
app.use('/references', referenceRouter);
app.use('/knowledgecatalog', knowledgecatalogRouter);
app.use('/workexperience', workexperienceRouter);
app.use('/skills', skillsRouter);
app.use('/education', educationRouter);
app.use('/users', usersRouter);

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
});

module.exports = app;
