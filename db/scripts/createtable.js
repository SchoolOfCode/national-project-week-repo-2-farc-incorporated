import query from "../index.js";
const sqlString = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    fullname TEXT,
    city TEXT,
    nickname TEXT,
    hobbies TEXT

    
)`

async function createUsersTable() {
    const res = await query(sqlString);
    console.log("Created users table", res);
}
createUsersTable()