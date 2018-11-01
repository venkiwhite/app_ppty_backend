/**
 * UserAdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


var userMethods = require('../libraries/userInfo');

module.exports = {

    find: (req, res) => {
        userMethods.findUser(req, res, 'useradmin');
    },

    create: (req, res) => {
        userMethods.createUser(req, res, 'useradmin');
    },

    update: (req, res) => {
        userMethods.updateUser(req, res, 'useradmin');
    },

    destroy: (req, res) => {
        userMethods.deleteUser(req, res, 'useradmin');
    },

    changePassword: (req, res) => {
        userMethods.changeUserPassword(req, res, 'useradmin');
    },

    validate: (req, res) => {
        userMethods.validateUser(req, res, 'useradmin');
    },

    logout: (req, res) => {
        req.session.user = null;
        res.ok({
            "message": "Success",
            "details": "Logout Successful"
        });
    },

}