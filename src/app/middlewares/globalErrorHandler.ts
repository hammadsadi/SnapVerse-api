/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleGenericError } from '../errors/handleGenericError';
import { handleDuplicateError } from '../errors/handleDuplicateError';
import { handleCastError } from '../errors/handleCastError';
import { handleValidationError } from '../errors/handleValidationError';
import { handleZodValidationError } from '../errors/handleZodError';

/**
 *@ Types of Error
 *@1 Duplicate Error for Mongoose
 *@2 Validation Error for Mongoose
 *@3 Cast Error
 *@4  Zod Error
 */

// Error Response Type
type TErrorResponseType = {
  success: boolean;
  message: string;
  statusCode: number;
  error: any;
  stack: string;
};
const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Cast Error
  if (error.name && error.name === 'ZodError') {
    handleZodValidationError(error, res);
  } else if (error instanceof mongoose.Error.CastError) {
    handleCastError(error, res);
  } else if (error.code && error.code === 11000) {
    handleDuplicateError(error, res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    handleValidationError(error, res);
  } else if (error instanceof Error) {
    handleGenericError(error, res);
  }
};

export default globalErrorHandler;
