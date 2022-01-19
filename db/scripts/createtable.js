import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    fullName TEXT,
    nickname TEXT,
    city TEXT,
    hobbies TEXT,
    tvShow TEXT,
    favouriteArtist TEXT, 
    favouriteFood TEXT, 
    superPower TEXT, 
    briefIntroduction TEXT,
    mostConfidentArea TEXT, 
    improveKnowledge TEXT,
    favouriteQuote TEXT
    

)`;

async function createUsersTable() {
  const res = await query(sqlString);
  console.log("Created users table", res);
}
createUsersTable();
