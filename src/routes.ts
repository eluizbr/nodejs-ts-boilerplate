import { Application } from 'express';

import UsersRoutes from './modules/users/routes/index';

const urlBase = '/api/v1';

const allRoutes = (server: Application) => {
  server.use(`${urlBase}/users`, UsersRoutes);

  // Default route errorhandler
  server.use(function(req, res, next) {
    res.status(500).json({
      status: 500,
      msg: `Error on route. This route exist?`,
      route: req.originalUrl
    });
    next();
  });
};

export default allRoutes;
