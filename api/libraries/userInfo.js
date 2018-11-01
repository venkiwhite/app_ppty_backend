const hash = require('./passwordHash');
var JwtServiceController = require('../controllers/JwtServiceController');

module.exports = {
  findUser: (req, res, collection) => {
    if (req.params.username != undefined && req.params.username != null) {
      sails.models[collection].find({ where: { username: req.params.username } }).exec(function (err, result) {
        if (err) {
          res.badRequest({
            "message": "Error",
            "details": err
          });
        } else {
          res.ok(result);
        }
      });
    }
    else {
      res.notFound();
    }
  },

  createUser: (req, res, collection) => {
    if (req.body.password != undefined && req.body.password != null) {
      if (sails.models[collection].validatePassword(req.body.password) != null && sails.models[collection].validatePassword(req.body.password) != false) {
        req.body.password = hash.encryptPassword(req.body.password);
        sails.models[collection].create(req.body).exec((err, result) => {
          if (err) {
            res.badRequest({
              "message": "Error",
              "details": err
            });
          } else {
            req.session.user = result[0].id;
            res.created({
              "message": "Success",
              "details": "User details is created"
            });
          }
        });
      }
      else {
        res.badRequest({
          "message": "Error",
          "details": "Password criteria didn't matched"
        });
      }
    }
    else {
      res.notFound();
    }
  },

  updateUser: (req, res, collection) => {
    if (req.params.username != undefined && req.params.username != null) {
      sails.models[collection].update({ where: { username: req.params.username } }).set({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobileNumber: req.body.mobileNumber
      }).exec((err, result) => {
        if (err) {
          res.badRequest({
            "message": "Error",
            "details": err
          });
        } else {
          res.created({
            "message": "Success",
            "details": "User details are updated"
          });
        }
      });
    }
    else {
      res.notFound();
    }
  },

  //To delete a user
  deleteUser: (req, res, collection) => {
    if (req.params.username != undefined && req.params.username != null) {
      sails.models[collection].update({ where: { username: req.params.username } }).set({ isDeleted: true }).exec((err, result) => {
        if (err) {
          res.badRequest({
            "message": "Error",
            "details": err
          });
        } else {
          res.ok({
            "message": "Success",
            "details": "User details are deleted"
          });
        }
      });
    }
    else {
      res.notFound();
    }
  },

  changeUserPassword: async (req, res, collection) => {
    if (req.body.username != undefined && req.body.username != null) {
      if (await comparePassword(res, collection, req.body.username, req.body.currentPassword) == true) {
        if (sails.models[collection].validatePassword(req.body.newPassword) != null && sails.models[collection].validatePassword(req.body.newPassword) != false) {
          sails.models[collection].update({ where: { username: req.body.username } }).set({ password: hash.encryptPassword(req.body.newPassword) }).exec((err, result) => {
            if (err) {
              res.badRequest({
                "message": "Error",
                "details": err
              });
            } else {
              res.ok({
                "message": "Success",
                "details": "Password has been changed"
              });
            }
          });
        }
        else {
          res.badRequest({
            "message": "Error",
            "details": "Password criteria didn't matched"
          });
        }
      }
      else {
        res.badRequest({
          "message": "Error",
          "details": "currentPassword is incorrect"
        });
      }
    }
    else {
      res.badRequest({
        "message": "Error",
        "details": "username is required field"
      });
    }

  },

  validateUser: async (req, res, collection) => {
    if (req.body.username != undefined && req.body.username != null) {
      if (await comparePassword(req, res, collection, req.body.username, req.body.password) == true) {
        res.ok({
          "message": "Success",
          "details": "LoggedIn",
          "token": JwtServiceController.issue({id: req.session.user})
        });
      } else {
        res.ok({
          "message": "Success",
          "details": "Login Failed"
        });
      }
    } else {
      res.notFound();
    }

  },

}

function comparePassword(req, res, collection, username, password) {
  return new Promise((resolve, reject) => {
    if (password != undefined && password != null) {
      password = hash.encryptPassword(password);
      sails.models[collection].find({ username: username }).exec(function (err, result) {
        if (err) {
          res.badRequest({
            "message": "Error",
            "details": "error occured while retrieving"
          });
        }
        else if (result.length == 1) {
          if (password == result[0].password) {
            req.session.user = result[0].id;
            resolve(true);
          }
          else {
            resolve(false);
          }
        }
        else {
          res.badRequest({
            "message": "Error",
            "details": "username is incorrect"
          });
        }
      });
    }
    else {
      res.badRequest({
        "message": "Error",
        "details": "Some fields are required"
      });
    }
  });
}