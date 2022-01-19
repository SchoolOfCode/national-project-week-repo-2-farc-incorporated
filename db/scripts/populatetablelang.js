import query from "../index.js";
import languagesData from "../../libs/languagesdata.js";

async function populateLanguagesTable() {
  for (let i = 0; i < languagesData.length; i++) {
    const name = languagesData[i].name;
    
    const res = await query(
      `INSERT INTO users (name) VALUES ($1) RETURNING *`,
      [name]
    );
    console.log(res);
  }
}

populateLanguagesTable();