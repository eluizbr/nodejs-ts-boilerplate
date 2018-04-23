import { Request, Response } from 'express';

import { mongoUniqueErrorHandler } from '../../../libs/mongoUniqueErrorHandler';
import { IUser } from '../helpers/user.interface';
import UserSchema from '../models/user-models';

export const createUser = async (req: Request, res: Response) => {
  const newUser = await new UserSchema(req.body);

  newUser
    .save()
    .then((user: IUser) => res.status(201).json(user))
    .catch((err: any) => res.status(409).json(mongoUniqueErrorHandler(err)));
};
