const cdsCompile = require("@sap/cds/lib/compile/cds-compile");
const SELECT = require("@sap/cds/lib/ql/SELECT");

module.exports=function(srv){
    srv.on('hello',function(req,res){
        let name=req.data.name;
        return "hello"+name;
    });

    srv.on('READ','ProjectEmployee', async function(req,next){
console.log('type of data query is here  :   ');
        console.log("req params is : ",req.params[0]);
        const tx=cds.tx(req);
        const reply= await tx.run(SELECT.from(employees).limit(10).where(
            {
                salaryAmount: {'>=':10000 }
            }
        ));
        console.log("\n and the length is :", reply.length);
        return reply;
    })
}