const errorMiddle = (error, req, res, next) => {
  const statusCode = error.status || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    status: false,
    statusCode,
    message,
  });
};

module.exports = errorMiddle;
