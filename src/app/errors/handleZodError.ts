import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// Zod Error Handler
const handleZodError = (er: ZodError): TGenericErrorResponse => {
  const error: TErrorSources = er.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    error,
  };
};

export default handleZodError;
