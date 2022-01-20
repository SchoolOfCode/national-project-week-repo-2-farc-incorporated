import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    nickname TEXT,
    city TEXT,
    briefintroduction TEXT,
    hobbies TEXT,  
    favtvshows TEXT,
    musictaste TEXT, 
    favouritefood TEXT, 
    superpower TEXT,
    mostconfidentareas TEXT,
    improveknowledge TEXT,
    favouritequote TEXT,
    interestingfact TEXT
)`;

async function createUsersTable() {
  const res = await query(sqlString);
  console.log("Created users table", res);
}
createUsersTable();
