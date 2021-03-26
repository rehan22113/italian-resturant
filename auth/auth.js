const auth=async(req,res,next)=>{
      if(req.session.loggedin){
         next();
      }
      else
      res.render("login")
    
}

module.exports = auth;