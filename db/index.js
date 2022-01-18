import pg from "pg";
import { dbPort } from "../config.js";

const pool = new pg.Pool({
	user: dbPort.PGUSER,
	host: dbPort.PGHOST,
	database: dbPort.PGDATABASE,
	password: dbPort.PGPASSWORD,
	port: dbPort.PGPORT,
	ssl: { rejectUnauthorized: false },
});

// console.log(pool);

export default function query(text, params, callback) {
	return pool.query(text, params, callback);
}
