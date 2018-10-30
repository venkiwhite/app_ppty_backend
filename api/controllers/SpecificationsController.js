/**
 * SpecificationsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const responseMessages = require('../libraries/response');

module.exports = {
  
    find: (req, res) => {
        Specifications.find({
            where: {
                isDeleted: false
            }
        }).exec(function (err, result) {
            if (err) {
                responseMessages.error(res, err);
            } else {
                responseMessages.responseGet(res, result);
            }
        });
    },

    create: (req, res) => {
        Specifications.create(req.body).fetch().exec((err, result) => {
            if (err) {
                responseMessages.error(res, err);
            }  else {
                responseMessages.responseOk(res, { "message": "Specifications details is created" });
            }
        });
    },

    update: (req, res) => {
        if (req.params.id != undefined) {
            Specifications.update({
                where: { 
                    id: req.params.id,
                    isDeleted: false
                }
            }).set(req.body).fetch().exec((err, result) => {
                if (err) {
                    responseMessages.error(res, err);
                } else if(result.length >= 1) {
                    responseMessages.responseOk(res, { "message": "Specifications details are updated" });
                } else {
                    responseMessages.error(res, "The record is not found or already deleted");
                }
            });
        }
        else {
            res.notFound();
        }
    },

    destroy: (req, res) => {
        if (req.params.id != undefined) {
            Specifications.update({
                where: {
                    id: req.params.id,
                    isDeleted: false
                }
            }).set({
                isDeleted: true
            }).fetch().exec((err, result) => {
                if (err) {
                    responseMessages.error(res, err);
                } else if(result.length >= 1) {
                    responseMessages.responseOk(res, { "message": "Specifications details are deleted" });
                } else {
                    responseMessages.error(res, "The record is not found or already deleted" );
                }
            });
        }
        else {
            res.notFound();
        }
    }

};

