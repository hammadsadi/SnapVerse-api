import { Response } from 'express';

export const handleGenericError = (err: any, res: Response) => {
  res.status(500).json({
    success: false,
    message: err.name,
    statusCode: 500,
    errors: err,
    stack: err.stack,
  });
};
