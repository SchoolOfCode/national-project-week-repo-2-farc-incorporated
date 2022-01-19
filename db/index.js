import pg from "pg";
import URL from "../config.js";

const pool = new pg.Pool({
	// user: dbPort.PGUSER,
	// host: dbPort.PGHOST,
	// database: dbPort.PGDATABASE,
	// password: dbPort.PGPASSWORD,
	// port: dbPort.PGPORT,

	connectionString: URL,
	ssl: { rejectUnauthorized: false },
});

// console.log(pool);

export default function query(text, params, callback) {
	return pool.query(text, params, callback);
}
