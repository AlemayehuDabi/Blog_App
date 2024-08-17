const errorHandler = (statusCode, msg) => {
  error = new Error();
  (error.statusCode = statusCode), (error.msg = msg);
  return error;
};

module.exports = errorHandler;
