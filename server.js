require('module-alias/register');
const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "Config.env") });

// const { sql } = require('@config/DBManager');

// const auth = require("@middleware/auth");

const app = express();
app.enable("trust proxy");

//start server command mandatory//172.25.25.21
app.use(cors());
//end server command mandatory//

app.use(express.json());

app.use("/api/Demopage", require("./routes/Demopage/DemoPage"));

//start server command mandatory//
app.use(express.static("dist"));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
//end server command mandatory//

app.listen(5002, () => {
    console.log("Backend running on http://10.70.100.14:5002");
});



