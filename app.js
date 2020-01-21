// All Requires
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// All Requires Of The Routing Section
var adminRouter = require("./routes/admin");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// Mounting The Express Application
var app = express();

// view engine setup + middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Adding The Webpack To Run Application In The Single Enviroment!
if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

// Creating The Mongoose Connection
mongoose.connect(
  "mongodb://localhost:27017/EASY_THINK",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err, "Not Connected To DB");
    } else {
      console.log("Connected Sucessfully TO DB");
      require("./utlis/seed");
    }
  }
);

// Providing The Api Paths
app.use("/api/v1/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Exporting The Server File
module.exports = app;
