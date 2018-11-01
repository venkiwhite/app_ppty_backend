/**
 * JwtServiceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var jwt = require('jsonwebtoken');

module.exports = {
    issue: function (payload) {
        token = jwt.sign(payload, sails.config.session.secret, { expiresIn: '1h' });
        return token;
    }
}

