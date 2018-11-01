/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var userMethods = require('../libraries/userInfo');

module.exports = {

    find: (req, res) => {
        userMethods.findUser(req, res, 'user');
    },

    create: (req, res) => {
        userMethods.createUser(req, res, 'user');
    },

    update: (req, res) => {
        userMethods.updateUser(req, res, 'user');
    },

    destroy: (req, res) => {
        userMethods.deleteUser(req, res, 'user');
    },

    changePassword: (req, res) => {
        userMethods.changeUserPassword(req, res, 'user');
    },

    validate: (req, res) => {
        userMethods.validateUser(req, res, 'user');
    },

    logout: (req, res) => {
        req.session.user = null;
        res.ok({
            "message": "Success",
            "details": "Logout Successful"
        });
    },

};

