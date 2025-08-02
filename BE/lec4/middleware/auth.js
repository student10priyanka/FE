const auth=(req,res,next)=>{
  
     const token="ABCDEF";
    const access=token==="ABCDEF";
    if(!access){
        res.send("No permission");
    }
    next();
}
module.exports={
    auth,
}