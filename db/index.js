import pg from "pg";
import { db } from "../config.js";

const pool = new pg.Pool({
  // user: dbPort.PGUSER,
  // host: dbPort.PGHOST,
  // database: dbPort.PGDATABASE,
  // password: dbPort.PGPASSWORD,
  // port: dbPort.PGPORT,
  connectionString: db.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params, callback) {
  return pool.query(text, params, callback);
}
