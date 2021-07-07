const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    error: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

const notFound = (err, req, res, next) => {
  const error = new Error(`${req.originalUrl} - Not Found !`);
  res.status(404);
  next(error);
};

export { notFound, errorHandler };
