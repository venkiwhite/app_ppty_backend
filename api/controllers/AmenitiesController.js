/**
 * AmenitiesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    find: (req, res) => {
        if(req.params.id != undefined){
            Amenities.find({id: req.params.id}).exec(function(err, result) {
                if (err) {
                    res.set('Content-Type', 'application/json');
                    res.badRequest(JSON.stringify(err));
                } else {

                    res.set('Content-Type', 'application/json');
                    res.end(JSON.stringify(result));
                }
            });
        }
        else {
            res.notFound();
        }
    },

    create: (req, res) => {
        Amenities.create(req.body).fetch().exec((err, result)=>{
            if(err){
                res.badRequest(err);
            } else {
                res.json(result);
            }
        });
    },

    update: (req, res) => {
        if(req.params.id != undefined){
            Amenities.update({where : {id: req.params.id}}).set(req.body).fetch().exec((err, result)=>{
                if(err){
                    res.badRequest(err);
                } else {
                    res.json(result);
                }
            });
        }
        else {
            res.notFound();
        }  
    },

    destroy: (req, res) => {
        if(req.params.id != undefined){
            Amenities.destroy({where : {id: req.params.id}}).fetch().exec((err, result)=>{
                if(err){
                    res.badRequest(err);
                } else {
                    res.json(result);
                }
            });
        }
        else {
            res.notFound();
        }
    }

};

