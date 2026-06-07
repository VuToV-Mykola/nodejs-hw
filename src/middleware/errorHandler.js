import { isHttpError } from 'http-errors';

export default function errorHandler(err, req, res, next) {
  if (isHttpError(err)) {
    res.status(err.status).json({
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    message: err.message,
  });
}
