import { Request, Response } from 'express';

import { userNotFound, userRemoved } from '../helpers/userErrorHandler';
import UserSchema from '../models/user-models';

export const removeUser = async (req: Request, res: Response) => {
  try {
    const user = await UserSchema.findByIdAndRemove(req.params.id);

    if (!user) return messageResult(res, req.params.id);

    res.status(200).json(userRemoved());
  } catch {
    return messageResult(res, req.params.id);
  }
};

function messageResult(res: Response, id: string) {
  const err = userNotFound();
  return res.status(err.statusCode).json(err);
}
