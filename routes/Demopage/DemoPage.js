const router = require("express").Router();
const { GetDBCon, sql } = require('@config/DBManager');
const path = require('path');

require("dotenv").config({ path: path.join(__dirname, "DemoPage.env") });

router.post("/samplereport", async (req, res) => {
    try {

        const DB_Obj = await GetDBCon("SDATA_PMIDATA");
       // console.log(process.env.ITDemoPage);
        const payload = req.body;   
        const payloadString = JSON.stringify(payload);
        const result = await DB_Obj.request()
            .input("PayLoad", sql.NVarChar(sql.MAX), payloadString)
            .execute(process.env.ITDemoPage);

        res.json(result.recordset[0] || { MSG: "No Response" });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message,
            details: err.toString()
        });
    }
});


module.exports = router;
