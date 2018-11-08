var jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    // decode token
    if (req.headers['x-access-token'] != undefined && req.headers['x-access-token'] != null && req.headers['x-access-token'] != "") {

        // verifies secret and checks exp
        jwt.verify(req.headers['x-access-token'], sails.config.session.secret, function (err, decoded) {
            if (err) {
                return res.forbidden({
                    "message": "Error",
                    "details": "invalid/expired token"
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                return next();
            }
        });
    } else {
        // if there is no token
        return res.forbidden({
            "message": "Error",
            "details": "Either token expired or not provided"
        });
    }
}
