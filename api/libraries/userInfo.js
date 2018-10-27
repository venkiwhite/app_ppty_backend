const responseMessages = require('./response');
const hash = require('./passwordHash');
module.exports = {
  findUser: (req, res, collection) => {
    if (req.params.username != undefined && req.params.username != null) {
      sails.models[collection].find({ where: { username: req.params.username } }).exec(function (err, result) {
        if (err) {
          responseMessages.error(res, err);
        } else {
          responseMessages.responseGet(res, result);
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
            responseMessages.error(res, err);
          } else {
            responseMessages.created(res, "User Created");
          }
        });
      }
      else {
        responseMessages.error(res, `Password criteria didn't matched`);
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
          responseMessages.error(res, err);
        } else {
          responseMessages.created(res, "User details are updated");
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
          responseMessages.error(res, err);
        } else {
          responseMessages.responseOk(res, "User has been deleted");
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
              responseMessages.error(res, err);
            } else {
              responseMessages.responseOk(res, "Password has been changed");
            }
          });
        }
        else {
          responseMessages.error(res, `Password criteria didn't matched`);
        }
      }
      else {
        responseMessages.error(res, "currentPassword is incorrect");
      }
    }
    else {
      responseMessages.error(res, "username is required field");
    }

  },

  validateUser: async (req, res, collection) => {
    if (req.body.username != undefined && req.body.username != null) {
      if (await comparePassword(res, collection, req.body.username, req.body.password) == true) {
        responseMessages.responseOk(res, "Login Successful");
      } else {
        responseMessages.responseOk(res, "Login Failed");
      }
    } else {
      res.notFound();
    }

  },

}

function comparePassword(res, collection, username, password) {
  return new Promise((resolve, reject) => {
    if (password != undefined && password != null) {
      password = hash.encryptPassword(password);
      sails.models[collection].find({ username: username }).exec(function (err, result) {
        if (err) {
          responseMessages.error(res, "error occured while retrieving");
        }
        else if(result.length >= 1){
          if (password == result[0].password) {
            resolve(true);
          }
          else {
            resolve(false);
          }
        }
        else{
          responseMessages.error(res, "username is incorrect");
        }
      });
    }
    else {
      responseMessages.error(res, "Some fields are required");
    }
  });
}