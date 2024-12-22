/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ZodError } from 'zod';
import { TErrorSources } from '../interface/error';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import AppError from '../errors/AppError';
import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Setup Default Value
  let statusCode = 500;
  let message = 'Something Went Wrong';
  let error:
    | { path: string; message: string }
    | { details: { path: string; message: string }[] } = {
    path: '',
    message: 'Something Went Wrong',
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = {
      details: simplifiedError?.error, // Array of objects wrapped in an object
    };
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = {
      path: '',
      message: simplifiedError?.message,
    };
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = {
      path: '',
      message: simplifiedError?.message,
    };
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    error = {
      path: '',
      message: simplifiedError?.message,
    };
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err?.message;
    error = {
      path: '',
      message: err?.message,
    };
  } else if (err instanceof Error) {
    message = err?.message;
    error = {
      path: '',
      message: err?.message,
    };
  }

  // Send the response
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error, // Object format for all errors
    stack: process.env.NODE_ENV === 'production' ? undefined : err?.stack,
  });
};
export default globalErrorHandler;
