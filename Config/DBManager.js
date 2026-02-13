// DBManager.js
const sql = require('mssql');
// require('../../dotenv').config();

const dbConfigs = {
  BACKOFFICE_IEPDPM: {
    user: process.env.BACKOFFICE_USER,
    password: process.env.BACKOFFICE_PASSWORD,
    server: process.env.BACKOFFICE_SERVER,
    database: process.env.BACKOFFICE_IEPDPM,
    options: {
      encrypt: false,
      trustServerCertificate: true
    },
    pool: { max: 10, min: 2, idleTimeoutMillis: 30000 }
  },
  BACKOFFICE_IEPEXPORT: {
    user: process.env.BACKOFFICE_USER,
    password: process.env.BACKOFFICE_PASSWORD,
    server: process.env.BACKOFFICE_SERVER,
    database: process.env.BACKOFFICE_IEPEXPORT,
    options: {
      encrypt: false,
      trustServerCertificate: true
    },
    pool: { max: 10, min: 2, idleTimeoutMillis: 30000 }
  },
  BACKOFFICE_TRANMSTR: {
    user: process.env.BACKOFFICE_USER,
    password: process.env.BACKOFFICE_PASSWORD,
    server: process.env.BACKOFFICE_SERVER,
    database: process.env.BACKOFFICE_TRANMSTR,
    options: {
      encrypt: false,
      trustServerCertificate: true
    },
    pool: { max: 10, min: 2, idleTimeoutMillis: 30000 }
  },
  SDATA_DMAT: {
    user: process.env.SDATA_USER,
    password: process.env.SDATA_PASSWORD,
    server: process.env.SDATA_SERVER,
    database: process.env.SDATA_DMAT,
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
      encrypt: false,
      trustServerCertificate: true
    },
    pool: { max: 10, min: 2, idleTimeoutMillis: 30000 }
  },
  SDATA_PMIDATA: {
    user: process.env.SDATA_USER,
    password: process.env.SDATA_PASSWORD,
    server: process.env.SDATA_SERVER,
    database: process.env.SDATA_PMIDATA,
     port: parseInt(process.env.DB_PORT) || 1433,
    options: {
      encrypt: false,
      trustServerCertificate: true
    },
    pool: { max: 10, min: 2, idleTimeoutMillis: 30000 }
  },
  SDATA_IEPNSDL: {
    user: process.env.SDATA_USER,
    password: process.env.SDATA_PASSWORD,
    server: process.env.SDATA_SERVER,
    database: process.env.SDATA_IEPNSDL,
     port: parseInt(process.env.DB_PORT) || 1433,
    options: {
      encrypt: false,
      trustServerCertificate: true
    },
    pool: { max: 10, min: 2, idleTimeoutMillis: 30000 }
  },
  SDATA_DMATEXPORT: {
    user: process.env.SDATA_USER,
    password: process.env.SDATA_PASSWORD,
    server: process.env.SDATA_SERVER,
    database: process.env.SDATA_DMATEXPORT,
     port: parseInt(process.env.DB_PORT) || 1433,
    options: {
      encrypt: false,
      trustServerCertificate: true
    },
    pool: { max: 10, min: 2, idleTimeoutMillis: 30000 }
  },
};

  
const DB_Pools = {};

// Get or create pool for a database
async function GetDBCon(dbName) {
  if (!dbConfigs[dbName]) {
    throw new Error(`DB config not found for ${dbName}`);
  }

  if (!DB_Pools[dbName]) {
    const pool = new sql.ConnectionPool(dbConfigs[dbName]);

    pool.on("error", err => {
      console.error(`DB error on ${dbName}`, err);
      DB_Pools[dbName] = null;
    });

    DB_Pools[dbName] = await pool.connect();
    console.log(`Connected to ${dbName}`);
  }

  return DB_Pools[dbName];
}

module.exports = { GetDBCon, sql };
