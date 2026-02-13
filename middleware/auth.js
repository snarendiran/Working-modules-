const jwt = require("jsonwebtoken");
const { GetDBCon, sql } = require('@config/DBManager');


module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json({ message: "Not authenticated" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const deviceId = req.headers["x-device-id"];

        const pool = await GetDBCon("BACKOFFICE_IEPDPM");
        
        // Option 5: Auth Check
        const session = await pool.request()
            .input("Option", sql.Int, 5)
            .input("session_id", sql.UniqueIdentifier, decoded.sid)
            .input("device_id", sql.VarChar(255), deviceId)
            .input("ip_address", sql.VarChar(45), req.ip)
            .execute(process.env.SessionManageProc);

        if (!session.recordset.length) {
            return res.status(401).json({ message: "Session expired or invalid" });
        }

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};