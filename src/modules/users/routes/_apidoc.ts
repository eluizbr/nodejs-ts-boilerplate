/**
 * @api {GET} /users GetAllUsers
 * @apiName GetAllUsers
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * listar todos os usuários da API.
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object[]} usuario             Lista com todos os usuários.
 * @apiSuccess {Boolean}  usuario.isActive    Usuário esta ou não ativo.
 * @apiSuccess {String}   usuario._id         ID do usuário.
 * @apiSuccess {String}   usuario.email       Email do usuário.
 * @apiSuccess {String}   usuario.password    Password do usuário.
 * @apiSuccess {String}   usuario.username    Username de acesso.
 * @apiSuccess {Date}     usuario.createdAt   Data de criação.
 * @apiSuccess {Date}     usuario.updatedAt   Data da última atualização.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *           {
 *               "isActive": true,
 *               "_id": "5ab9adfa372ff70ce3b2df28",
 *               "email": "teste@gmail.com",
 *               "password": "$2a$10$QWeUgZ9S99bvsLQFOo9Wx.Z5yq//4itSqnpXQQ1vt.1lbjb4qxKGa",
 *               "username": "teste",
 *               "createdAt": "2018-03-27T02:35:39.387Z",
 *               "updatedAt": "2018-03-27T02:35:39.387Z",
 *              "__v": 0
 *          }
 *      ]
 */

/**
 * @api {GET} /users/:id GetUserByID
 * @apiName GetUserByID
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * retorna um usuário com base no ID enviado.
 *
 * @apiParam {String} id  ID do usuário.
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object}   usuario             Objeto com o usuário.
 * @apiSuccess {Boolean}  usuario.isActive    Usuário esta ou não ativo.
 * @apiSuccess {String}   usuario._id         ID do usuário.
 * @apiSuccess {String}   usuario.email       Email do usuário.
 * @apiSuccess {String}   usuario.password    Password do usuário.
 * @apiSuccess {String}   usuario.username    Username de acesso.
 * @apiSuccess {Date}     usuario.createdAt   Data de criação.
 * @apiSuccess {Date}     usuario.updatedAt   Data da última atualização.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "isActive": true,
 *          "_id": "5ab9a3f9adfeee05e79fae97",
 *          "email": "email@gmail.com",
 *          "password": "$2a$10$ZiBKrcZQsZScFkfBrPBepeYCqlM5mzo/sIpzwk7MvRbqhRUkFTpfO",
 *          "username": "teste",
 *          "createdAt": "2018-03-27T01:52:57.361Z",
 *         "updatedAt": "2018-03-27T01:52:57.361Z",
 *         "__v": 0
 *      }
 *
 * @apiError {Object} UserNotFound The <code>id</code> of the User was not found.
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "User not found"
 *     }
 */

/**
 * @api {POST} /users/:id CreateUser
 * @apiName CreateUser
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * Criar um novo usuário.
 *
 * @apiParam {String} email     Email do usuário.
 * @apiParam {String} password  Senha do usuário.
 * @apiParam {String} username  Username de acesso do usuário.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "teste@gmail.com",
 *       "password": "123456",
 *       "username": "teste"
 *     }
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object}   usuario             Objeto com o usuário.
 * @apiSuccess {Boolean}  usuario.isActive    Usuário esta ou não ativo.
 * @apiSuccess {String}   usuario._id         ID do usuário.
 * @apiSuccess {String}   usuario.email       Email do usuário.
 * @apiSuccess {String}   usuario.password    Password do usuário.
 * @apiSuccess {String}   usuario.username    Username de acesso.
 * @apiSuccess {Date}     usuario.createdAt   Data de criação.
 * @apiSuccess {Date}     usuario.updatedAt   Data da última atualização.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *      {
 *          "isActive": true,
 *          "_id": "5ab9a3f9adfeee05e79fae97",
 *          "email": "email@gmail.com",
 *          "password": "$2a$10$ZiBKrcZQsZScFkfBrPBepeYCqlM5mzo/sIpzwk7MvRbqhRUkFTpfO",
 *          "username": "teste",
 *          "createdAt": "2018-03-27T01:52:57.361Z",
 *         "updatedAt": "2018-03-27T01:52:57.361Z",
 *         "__v": 0
 *      }
 *
 * @apiError {Array} ValidatorErrorThe Erros de validação.
 *
 * @apiErrorExample {Array} Error-Response:
 *     HTTP/1.1 409 Not Found
 *       [
 *           {
 *               "title": "password",
 *               "type": "ValidatorError",
 *               "body": "Error, A senha deve conter 6 digitos",
 *               "status": 409
 *           },
 *           {
 *               "title": "email",
 *               "type": "ValidatorError",
 *               "body": "Error, o email teste@gmail.com já esta em uso por outro usuário.",
 *               "status": 409
 *           },
 *           {
 *              "title": "username",
 *              "type": "ValidatorError",
 *              "body": "Error, o username teste já esta em uso por outro usuário.",
 *              "status": 409
 *          }
 *      ]
 */

/**
 * @api {DELETE} /users/:id RemoveUserByID
 * @apiName RemoveUserByID
 * @apiGroup Users
 * @apiVersion  1.0.0
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization Bearer token
 *
 * @apiDescription Este endpiont tem como objetivo
 * remover um usuário com base no ID enviado.
 *
 * @apiParam {String} id  ID do usuário.
 *
 * @apiHeaderExample {json} Header:
 *     {
 *       "Content-Type": "application/json"
 *     }
 *
 * @apiSuccess {Object} success User removed.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "statusCode": 200,
 *          "message": "User removed"
 *      }
 *
 * @apiError {Object} UserNotFound User not found
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "User not found"
 *     }
 */
