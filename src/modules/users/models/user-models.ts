import { compareSync, genSalt, hash } from 'bcryptjs';
import { NextFunction } from 'express';
import { Document, Model, model, Schema } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

import { IUser } from '../helpers/user.interface';
import { userModel } from './user-schema';

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema(userModel, { timestamps: true });

/**
 * Hash password
 */
userSchema.pre('save', function(next: NextFunction) {
  const self: any = this;
  if (!this.isModified('password')) return next();

  genSalt(10, (err: Error, salt: any) => {
    hash(self.password, salt, (err: Error, hash: string) => {
      err ? next(err) : (self.password = hash);
      next();
    });
  });
});

/**
 * Compare if password is correct
 */

userSchema.methods.comparePassword = function(
  candidatePassword: string,
  cb: any
) {
  return compareSync(candidatePassword, this.password);
};

/**
 * Mongoose Plugins
 * Unique Validator
 * https://github.com/blakehaswell/mongoose-unique-validator
 */

userSchema.plugin(uniqueValidator, {
  message: 'Error, o {PATH} {VALUE} já esta em uso por outro usuário.',
  type: 'mongoose-unique-validator'
});

const UserSchema: Model<IUserModel> = model<IUserModel>('user', userSchema);
export default UserSchema;
