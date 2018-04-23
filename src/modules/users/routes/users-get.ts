import { Request, Response } from 'express';

import UserSchema, { IUserModel } from '../models/user-models';

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user: IUserModel[] = await UserSchema.find({});

  res.status(200).json(user);
};
