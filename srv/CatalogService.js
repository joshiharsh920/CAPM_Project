module.exports=cds.service.impl(async function(){
    const { POs }=this.entities;

    this.on('boost',async function(req,res){
        try {
            const ID=req.params[0];
            console.log("Hey harsh you gave me id:", ID);
            const tx=cds.tx(req);
            await tx.update(POs).with({
                GROSS_AMOUNT : {'+=' : 20000 }
             }).where(ID);
        } catch (error) {
            console.log("Error : "+ error.toString())
        }
    })
})