/**
 * BhkUnitsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    find: (req, res) => {

        BhkUnits.find({
            where: {
                isDeleted: false
            }
        }).exec(function (err, result) {
            if (err) {
                res.badRequest({
                    "message": "Error",
                    "details": err
                });
            } else {
                res.ok(result);
            }
        });
    },

    create: (req, res) => {
        req.body.createdBy = req.session.user;
        BhkUnits.create(req.body).exec((err, result) => {
            if (err) {
                res.badRequest({
                    "message": "Error",
                    "details": err
                });
            } else {
                res.created({
                    "message": "Success",
                    "details":"Bhk details is created"
                });
            }
        });
    },

    update: (req, res) => {
        if (req.params.id != undefined) {
            req.body.updatedBy = req.session.user;
            BhkUnits.update({
                where: {
                    id: req.params.id,
                    isDeleted: false
                }
            }).set(req.body).fetch().exec((err, result) => {
                if (err) {
                    res.badRequest({
                        "message": "Error",
                        "details": err
                    });
                } else if (result.length >= 1) {
                    res.created({
                        "message": "Success",
                        "details": "Bhk details are updated"
                    });
                } else {
                    res.badRequest({
                        "message": "Error",
                        "details": "The record is not found or already deleted"
                    });
                }
            });
        }
        else {
            res.notFound();
        }
    },

    destroy: (req, res) => {
        if (req.params.id != undefined) {
            req.body.updatedBy = req.session.user;
            BhkUnits.update({
                where: {
                    id: req.params.id,
                    isDeleted: false
                }
            }).set({
                isDeleted: true
            }).fetch().exec((err, result) => {
                if (err) {
                    res.badRequest({
                        "message": "Error",
                        "details": err
                    });
                } else if (result.length >= 1) {
                    res.ok({
                        "message": "Success",
                        "details": "Bhk details are deleted"
                    });
                } else {
                    res.badRequest({
                        "message": "Error",
                        "details": "The record is not found or already deleted"
                    });
                }
            });
        }
        else {
            res.notFound();
        }
    }
};

