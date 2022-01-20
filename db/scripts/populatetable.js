import query from "../index.js";
import userData from "../../libs/usersdata.js";

async function populateUserTable() {
  for (let i = 0; i < userData.length; i++) {
    const firstname = userData[i].firstname;
    const lastname = userData[i].lastname;
    const nickname = userData[i].nickname;
    const city = userData[i].city;
    const briefintroduction = userData[i].briefintroduction;
    const hobbies = userData[i].hobbies;
    const favtvshows = userData[i].favtvshows;
    const musictaste = userData[i].musictaste;
    const favouritefood = userData[i].favouritefood;
    const superpower = userData[i].superpower;
    const mostconfidentareas = userData[i].mostconfidentareas;
    const improveknowledge = userData[i].improveknowledge;
    const favouritequote = userData[i].favouritequote;
    const interestingfact = userData[i].interestingfact;

    const res = await query(
      `INSERT INTO users (firstname, lastname, nickname, city, briefintroduction, hobbies, favtvshows, musictaste, favouritefood, superpower,  mostconfidentareas, improveknowledge, favouritequote, interestingfact) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`,
      [
        firstname,
        lastname,
        nickname,
        city,
        briefintroduction,
        hobbies,
        favtvshows,
        musictaste,
        favouritefood,
        superpower,
        mostconfidentareas,
        improveknowledge,
        favouritequote,
        interestingfact,
      ]
    );
    console.log(res);
  }
}

populateUserTable();
