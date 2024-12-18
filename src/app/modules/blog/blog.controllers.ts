import { Request, Response } from 'express';
/**
 * @Desc Blog Create
 * @Params ""
 * @Method POST
 * @Return Data
 */

const blogCreate = async (req: Request, res: Response) => {
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

export const BlogControllers = {
  blogCreate,
};
