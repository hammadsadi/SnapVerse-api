/**
 * @Desc User Create
 * @Params ""
 * @Method POST
 * @Return Data
 */

import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';

const userCreate = async (req: Request, res: Response) => {
  try {
    sendResponse(res, {
      success: true,
      message: 'User registered successfully',
      statusCode: 201,
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

export const UserControllers = {
  userCreate,
};
