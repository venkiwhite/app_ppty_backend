/**
 * AmenitiesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const responseMessages = require('../libraries/response');

module.exports = {

    find: (req, res) => {
        Amenities.find({
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
        Amenities.create(req.body).fetch().exec((err, result) => {
            if (err) {
                responseMessages.error(res, err);
            }  else {
                responseMessages.responseOk(res, { "message": "Amenities details is created" });
            }
        });
    },

    update: (req, res) => {
        if (req.params.id != undefined) {
            Amenities.update({
                where: { 
                    id: req.params.id,
                    isDeleted: false
                }
            }).set(req.body).fetch().exec((err, result) => {
                if (err) {
                    responseMessages.error(res, err);
                } else if(result.length >= 1) {
                    responseMessages.responseOk(res, { "message": "Amenities details are updated" });
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
            Amenities.update({
                where: {
                    id: req.params.id,
                    isDeleted: false
                }
            }).set({
                isDeleted: true,
                deletedAt: new Date()
            }).fetch().exec((err, result) => {
                if (err) {
                    responseMessages.error(res, err);
                } else if(result.length >= 1) {
                    responseMessages.responseOk(res, { "message": "Amenities details are deleted" });
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

