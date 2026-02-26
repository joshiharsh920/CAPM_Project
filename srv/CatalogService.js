module.exports=cds.service.impl(async function(){
    const { POs , EmployeeSet }=this.entities;

    this.before('UPDATE','EmployeeSet',(req)=>{
     console.log("Salary Credited :",req.data.salaryAmount);
     if(req.data.salaryAmount >=1000){
        req.error(500,"Requested salary is not allowed");
     }
    });

    this.on('getOrderDefaults',function(req,res){
        return {
            "OVERALL_STATUS":"N"
        };
        });
        
    this.on('boost','POs',async function(req,res){
        try {
            const ID=req.params[0];
            console.log("Hey harsh you gave me id:", ID);
            const tx=cds.tx(req);
            await tx.update(POs).with({
                GROSS_AMOUNT : {'+=' : 800 }
             }).where(ID);
             return tx.read(POs).where(ID); 
        } catch (error) {
            console.log("Error : "+ error.toString())
        }
    })

     this.on('setOrderProcessing', POs, async req => {
        const tx = cds.tx(req);
        await tx.update(POs, req.params[0].ID).set({OVERALL_STATUS: 'A'});
    });

    this.on('getLargestOrder',async function(req,res) {
        try {
            const tx=cds.tx(req);
            const reply=await tx.read(POs).orderBy({
            GROSS_AMOUNT:'desc'
            }).limit(1);

            return reply;
        } catch (error) {
            console.log("Error "+error);
        }
    })
})