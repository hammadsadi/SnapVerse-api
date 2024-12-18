/**
 * @Desc User Create
 * @Params ""
 * @Method POST
 * @Return Data
 */

import { Request, Response } from 'express';

const userCreate = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    res.status(400).json({
      success: false,
      data: req.body,
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
