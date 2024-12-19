import { Response } from 'express';

export const handleDuplicateError = (err: any, res: Response) => {
  res.status(409).json({
    success: false,
    message: err.name,
    statusCode: 409,
    errors: err,
    stack: err.stack,
  });
};
