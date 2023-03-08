const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const userRouter = require('./routes/admin/userRoutes');
const newRouter = require('./routes/admin/newRouters')
const productRouter = require('./routes/admin/productRouters')
const logonRouter = require('./routes/admin/logonRouters')
const news = require('./routes/web/newRouters')
const product = require('./routes/web/productRouters')
const JWT = require('./util/JWT');

const app = express();
app.get('/favicon.ico', (req, res) => res.status(204));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(news)
app.use(product)
app.use(logonRouter)

/**
 * 验证token
 */
app.use((req, res, next) => {
  if (req.originalUrl === '/admin/user/login') return next()

  const token = req.headers['authorization'].split(' ')[1]
  if (token) {
    const payload = JWT.verify(token)
    if (payload) {
      const newToken = JWT.generate({
        _id: payload._id,
        userName: payload.userName,
        accountNumber: payload.accountNumber,
        role: payload.role,
        userRole:payload.userRole,
      }, '1d')
      res.header('Authorization', newToken)

      /** 挂载当前用户账号信息 */
      req.userRole = payload.userRole
      req.role = payload.role
      req.user = payload.accountNumber

      next()
    } else {
      res.status(401).send({
        success: false,
        code: 401,
        message: '获取token失败',
      })
    }
  }
})

app.use(userRouter)
app.use(newRouter)
app.use(productRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
