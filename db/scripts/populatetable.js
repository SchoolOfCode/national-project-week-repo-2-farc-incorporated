import query from "../index.js";
import userData from "../../libs/usersdata.js";

async function populateUserTable() {
  for (let i = 0; i < userData.length; i++) {
    const fullName = userData[i].fullname;
    const nickname = userData[i].nickname;
    const city = userData[i].city;
    const hobbies = userData[i].hobbies;

    const res = await query(
      `INSERT INTO users (fullname, city, nickname, hobbies) VALUES ($1, $2, $3, $4) RETURNING *`,
      [fullName, nickname, city, hobbies]
    );
    console.log(res);
  }
}

populateUserTable();
