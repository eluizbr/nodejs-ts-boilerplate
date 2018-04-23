import { Request, Response } from 'express';

import { userNotFound } from '../helpers/userErrorHandler';
import UserSchema from '../models/user-models';

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    return res.status(200).json(user);
  } catch {
    const err = userNotFound();
    res.status(err.statusCode).json(err);
  }
};
