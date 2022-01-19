import query from "../index.js";
import languagesData from "../../libs/languagesdata.js";

const sqlString = `CREATE TABLE IF NOT EXISTS languages (
    id SERIAL PRIMARY KEY,
    name TEXT,  
)`;

async function createLanguageTable() {
  const res = await query(sqlString);
  console.log("Created language table", res);
}
createLanguageTable();

con.connect(function() {
    const SQL = `SELECT * FROM languagesData 
    INNER JOIN * ON usersData WHERE id`
})
