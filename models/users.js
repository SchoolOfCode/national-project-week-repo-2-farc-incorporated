import query from "../db/index.js";

export async function getAllUsers() {
	const data = await query(`SELECT * FROM users;`);
	return data.rows;
}

export async function addUserToTable(fullname, nickname, city, hobbies) {
	const data = await query(
		`INSERT INTO users(fullname,nickname,city,hobbies) VALUES($1,$2,$3,$4)`,
		[fullname, nickname, city, hobbies]
	);
	return data.rows;
}

export async function deleteUserFromTable(id) {
	const data = await query(`DELETE FROM users WHERE id = $1;`, [id]);
	return data.rows;
}
