/**
 * UserAdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    find: (req, res) => {
        if (req.params.username != undefined) {
            UserAdmin.find({ where: { username: req.params.username } }).exec(function (err, result) {
                if (err) {
                    res.set('Content-Type', 'application/json');
                    res.badRequest(JSON.stringify(err));
                } else {
                    res.set({ 'Content-Type': 'application/json', });
                    res.status(200);
                    res.end(JSON.stringify(result));
                }
            });
        }
        else {
            res.notFound();
        }
    },

    create: (req, res) => {
        UserAdmin.create(req.body).fetch().exec((err, result) => {
            if (err) {
                console.log("err-->", err);
                res.badRequest(err);
            } else {
                res.set({ 'Content-Type': 'application/json', });
                res.status(201);
                res.end(JSON.stringify({ "message": "User Created" }));
            }
        });
    },

    update: (req, res) => {
        if (req.params.username != undefined) {
            UserAdmin.update({ where: { username: req.params.username } }).set(req.body).fetch().exec((err, result) => {
                if (err) {
                    res.badRequest(err);
                } else {
                    res.set({ 'Content-Type': 'application/json', });
                    res.status(201);
                    res.end(JSON.stringify({ "message": "User details are updated" }));
                }
            });
        }
        else {
            res.notFound();
        }
    },

    destroy: (req, res) => {
        if (req.params.username != undefined) {
            UserAdmin.destroy({ where: { username: req.params.username } }).fetch().exec((err, result) => {
                if (err) {
                    res.set({ 'Content-Type': 'application/json', });
                    res.status(400);
                    res.end(JSON.stringify({
                        "message": "error",
                        "error": err
                    }));
                } else {
                    res.set({ 'Content-Type': 'application/json', });
                    res.status(200);
                    res.end(JSON.stringify({ "message": "User details are deleted" }));
                }
            });
        }
        else {
            res.notFound();
        }
    }

};

