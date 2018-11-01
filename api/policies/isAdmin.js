module.exports = function(req, res, next){

    if(req.session.user != undefined && req.session.user != null){
        UserAdmin.find({
            where:{
                id: req.session.user
            }
        }).exec( (err, result) => {
            if(err){
                return res.forbidden({
                    "message": "Error",
                    "details": "error while getting user details"
                }); 
            }
            else if(result.length == 1 ){
                if(result[0].id == req.session.user){
                    return next();
                }
                else{
                    return res.forbidden({
                        "message": "Error",
                        "details": "User is not admin"
                    });
                }
            }
            else{
                return res.forbidden({
                    "message": "Error",
                    "details": "User is not admin"
                });
            }
        });
        

    }
    else{
        return res.forbiddenres.forbidden({
            "message": "Error",
            "details": "Please login first"
        });
    }
    
}