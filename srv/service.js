module.exports=function(srv){
    srv.on('hello',function(req,res){
        let name=req.data.name;
        return "hello"+name;
    });
}