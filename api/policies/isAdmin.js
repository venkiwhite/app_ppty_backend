module.exports = function(req, res, next){

    if(req.decoded.id != undefined && req.decoded.id != null){
        UserAdmin.find({
            where:{
                id: req.decoded.id
            }
        }).exec( (err, result) => {
            if(err){
                return res.forbidden({
                    "message": "Error",
                    "details": "error while getting user details"
                }); 
            }
            else if(result.length == 1 ){
                if(result[0].id == req.decoded.id){
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
        return res.forbidden({
            "message": "Error",
            "details": "No user found"
        });
    }
    
}