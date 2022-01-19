import query from "../index.js";
import userData from "../../libs/usersdata.js";

async function populateUserTable() {
  for (let i = 0; i < userData.length; i++) {
    const fullName = userData[i].fullName;
    const nickname = userData[i].nickname;
    const city = userData[i].city;
    const hobbies = userData[i].hobbies;
    const tvShow = userData[i].tvShow;
    const favouriteArtist = userData[i].favouriteArtist;
    const favouriteFood = userData[i].favouriteFood;
    const superPower = userData[i].superPower;
    const briefIntroduction = userData[i].briefIntroduction;
    const mostConfidentArea = userData[i].mostConfidentArea;
    const improveKnowledge = userData[i].improveKnowledge;
    const favouriteQuote = userData[i].favouriteQuote;

    const res = await query(
      `INSERT INTO users (fullname, nickname, city, hobbies, tvShow, favouriteArtist, favouriteFood, superPower, briefIntroduction, mostConfidentArea, improveKnowledge, favouriteQuote) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      [fullName, nickname, city, hobbies, tvShow, favouriteArtist, favouriteFood, superPower, briefIntroduction, mostConfidentArea, improveKnowledge, favouriteQuote]
    );
    console.log(res);
  }
}

populateUserTable();
