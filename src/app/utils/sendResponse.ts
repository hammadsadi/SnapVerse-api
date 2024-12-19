import { Response } from 'express';

// Type For Response
type TSuccessResponse<T> = {
  success: boolean;
  message: string;
  statusCode: number;
  data: T | T[] | null;
};

const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(400).json({
    success: true,
    message: data.message,
    statusCode: data.statusCode,
    data: data.data,
  });
};

export default sendResponse;
