require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
let cookieParser = require('cookie-parser');
const logger = require('morgan');

//router middleware import
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let projectRouter = require('./routes/projects');
let knowledgecatalogRouter = require('./routes/knowledge_catalog');
let workexperienceRouter = require('./routes/work_experience');
let skillsRouter = require('./routes/skills');
let educationRouter = require('./routes/education');
let referenceRouter = require('./routes/references');

const mongoose = require('mongoose');
const config = require('./config/config');

//database setup
const connection_string = config.database.buildConnectionString();
mongoose.connect(connection_string)
  .then(() => {
    console.log('Database connection successful.');
  })
  .catch((error) =>{
    console.log('An error has occurred connection to the database.', error);
  })

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
app.use('/projects', projectRouter);
app.use('/references', referenceRouter);
app.use('/knowledge_catalog', knowledgecatalogRouter);
app.use('/work_experience', workexperienceRouter);
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
