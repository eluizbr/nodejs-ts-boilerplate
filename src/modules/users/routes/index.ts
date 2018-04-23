import * as express from 'express';

import { removeUser } from './user-delete';
import { getUserById } from './user-get-ById';
import { updateUser } from './user-patch';
import { getAllUsers } from './users-get';
import { createUser } from './users-post';

const UsersRoutes = express.Router();

UsersRoutes.get('/', getAllUsers)
  .get('/:id', getUserById)
  .post('/', createUser)
  .patch('/:id', updateUser)
  .delete('/:id', removeUser);

export default UsersRoutes;
