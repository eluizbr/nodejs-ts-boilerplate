import { Request, Response } from 'express';

import { userNotFound } from '../helpers/userErrorHandler';
import UserSchema from '../models/user-models';

export const updateUser = async (req: Request, res: Response) => {
  const options = { new: true };

  try {
    const user = await UserSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.status(200).json(user);
  } catch {
    const err = userNotFound();
    res.status(err.statusCode).json(err);
  }
};
