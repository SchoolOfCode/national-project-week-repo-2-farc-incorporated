import query from "../db/index.js";

export async function getAllUsers() {
	const data = await query(`SELECT * FROM users;`);
	return data.rows;
}

export async function addUserToTable(
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
	interestingfact
) {
	const data = await query(
		`INSERT INTO users(firstname, lastname, nickname, city, briefintroduction, hobbies, favtvshows, musictaste, 			favouritefood,
			superpower,
			mostconfidentareas,
			improveknowledge,
			favouritequote,
			interestingfact) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
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
	return data.rows;
}

export async function deleteUserFromTable(id) {
	const data = await query(`DELETE FROM users WHERE id = $1;`, [id]);
	return data.rows;
}
