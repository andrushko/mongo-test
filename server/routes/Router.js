const AuthenticationController = require('../controllers/AuthenticationController');
const EmployeesController = require('../controllers/EmployeesController');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
  router.route('/users')
    .post(EmployeesController.add)
    .get(validateToken, EmployeesController.getAll); // This route will be protected
  
  router.route('/login')
    .post(AuthenticationController.login);

    return router;
};