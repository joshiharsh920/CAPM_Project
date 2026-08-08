const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function () {

//   console.log("CatalogService loaded");

//   const backend = await cds.connect.to('ZTEST1_HARSH_DEMO_SRV');

//   this.on('READ', 'ZTESTHARSHDemo', async (req) => {
//     try {
//       console.log("READ triggered for ZTESTHARSHDemo");

//       return await backend.run(req.query);

//     } catch (err) {
//       console.error("Backend error:", err.message);
//       req.error(500, err.message);
//     }
//   });

// });
module.exports = cds.service.impl(async function () {

    const external =await cds.connect.to('ZTEST1_HARSH_DEMO_SRV');


    this.on('READ', 'ZTESTHARSHDemo', async (req) => {

        try {
            const result = await external.run(req.query);

            console.log("✅ External Data:", result);

            return result;

        } catch (error) {
            console.error("❌ FULL ERROR:", error);   // 👈 IMPORTANT
            console.error("❌ MESSAGE:", error.message);
            console.error("❌ STACK:", error.stack);

            req.error(500, error.message);
        }
    });

    const { POs, EmployeeSet } = this.entities;

    this.before('UPDATE', 'EmployeeSet', (req) => {
        console.log("Salary Credited :", req.data.salaryAmount);
        if (req.data.salaryAmount >= 1000) {
            req.error(500, "Requested salary is not allowed");
        }
    });

    // this.on('CREATE', 'AddressSet',(req, res) => {
    //     console.log("Address Creation Triggered with data:", req.data);
    // });

    // this.after('CREATE', 'AddressSet', (data, req) => {
    //     console.log("Address Created with data:", data);
    // });

    // this.on('CREATE', 'BusinessPartnerSet',(req, res) => {
    //     console.log("Business Partner Creation Triggered with data:", req.data);
    // });

    // this.after('CREATE', 'BusinessPartnerSet', (data, req) => {
    //     console.log("Business Partner Created with data:", data);
    // });

    this.before('CREATE', 'EmployeeSet', (req, res) => {
        console.log(req.data);
        if (req.data.email.includes('gmail')) {
            return req.error(400, "Email is not allowed", 'email');
        }
    });

    this.on('CREATE', 'BusinessPartnerSet', async (req, res) => {
        const tx = cds.tx(req);
        const addressUUID = crypto.randomUUID().replace(/-/g, "");
        const oPayload = {
            BP_ID: req.data.BP_ID,
            COMPANY_NAME: req.data.COMPANY_NAME,
            EMAIL_ADDRESS: req.data.EMAIL_ADDRESS,
            PHONE_NUMBER: req.data.PHONE_NUMBER,
            ADDRESS_GUID: {
                NODE_KEY: addressUUID,
                CITY: req.data.ADDRESS_GUID.CITY,
                COUNTRY: req.data.ADDRESS_GUID.COUNTRY,
                STREET: req.data.ADDRESS_GUID.STREET
            }
        };
        await tx.create('BusinessPartnerSet').entries(oPayload);
    });

    this.on('getOrderDefaults', function (req, res) {
        return {
            "OVERALL_STATUS": "N"
        };
    });

    this.on('boost', 'POs', async function (req, res) {
        try {
            const ID = req.params[0];
            console.log("Hey harsh you gave me id:", ID);
            const tx = cds.tx(req);
            await tx.update(POs).with({
                GROSS_AMOUNT: { '+=': 800 }
            }).where(ID);
            return tx.read(POs).where(ID);
        } catch (error) {
            console.log("Error : " + error.toString())
        }
    })

    this.after('boost', 'POs', async function (data, req) {
        try {
            const IDP = 'q';
        }
        catch (error) {

        }
    })

    this.on('setOrderCancelled', 'POs', async (req, res) => {
        const ID = req.params[0];
        const tx = cds.tx(req);
        await tx.update(POs).with({ LIFECYCLE_STATUS: 'O' }).where(ID);
        return tx.read(POs).where(ID);
    });

    this.on('setOrderProcessing', POs, async req => {
        const tx = cds.tx(req);
        await tx.update(POs, req.params[0].ID).set({ OVERALL_STATUS: 'A' });
    });

    this.on('getLargestOrder', async function (req, res) {
        try {
            const tx = cds.tx(req);
            const reply = await tx.read(POs).orderBy({
                GROSS_AMOUNT: 'desc'
            }).limit(1);

            return reply;
        } catch (error) {
            console.log("Error " + error);
        }
    })
})