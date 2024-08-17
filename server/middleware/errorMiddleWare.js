const errorMiddle = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const msg = error.msg || "Internal Server Error";
  return res.status(statusCode).json({
    status: false,
    statusCode,
    msg: msg,
  });
};

module.exports = errorMiddle;
