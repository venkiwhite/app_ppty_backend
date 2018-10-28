/**
 * BhkUnitsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    find: (req, res) => {

        BhkUnits.find().exec(function (err, result) {
            if (err) {
                responseMessages.error(res, err);
            } else {
                res.set({ 'Content-Type': 'application/json', });
                res.status(200);
                res.end(JSON.stringify(result));
            }
        });
    },

    create: (req, res) => {
        BhkUnits.create(req.body).fetch().exec((err, result) => {
            if (err) {
                responseMessages.error(res, err);
            } else {
                res.set({ 'Content-Type': 'application/json', });
                res.status(201);
                res.end(JSON.stringify({ "message": "Bhk Created" }));
            }
        });
    },

    update: (req, res) => {
        if (req.params.id != undefined) {
            BhkUnits.update({ where: { id: req.params.id } }).set(req.body).fetch().exec((err, result) => {
                if (err) {
                    responseMessages.error(res, err);
                } else {
                    res.set({ 'Content-Type': 'application/json', });
                    res.status(201);
                    res.end(JSON.stringify({ "message": "Bhk details are updated" }));
                }
            });
        }
        else {
            res.notFound();
        }
    },

    destroy: (req, res) => {
        if (req.params.id != undefined) {
            BhkUnits.update({ where: { id: req.params.id } }).set({ isDeleted: true }).fetch().exec((err, result) => {
                if (err) {
                    responseMessages.error(res, err);
                } else {
                    res.set({ 'Content-Type': 'application/json', });
                    res.status(200);
                    res.end(JSON.stringify({ "message": "Bhk details are deleted" }));
                }
            });
        }
        else {
            res.notFound();
        }
    }
};

