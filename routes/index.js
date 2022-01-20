import express from "express";
const router = express.Router();
import cors from "cors";
router.use(cors());

import {
	getAllUsers,
	addUserToTable,
	deleteUserFromTable,
} from "../models/users.js";

router
	.route("/users")
	.post(async (req, res) => {
		const {
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
		} = req.body;
		console.log(req.body);

		const result = await addUserToTable(
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
		);
		res.json({ success: true, message: "user added", payload: result });
	})
	.get(async (req, res) => {
		const result = await getAllUsers();
		res.json({
			success: true,
			message: "Here are the users: ",
			payload: result,
		});
	});
router
	.route("/users/:id")

	.delete(async (req, res) => {
		const { id } = req.params;
		await deleteUserFromTable(id);
		res.json({ success: true, message: "user has been deleted" });
	});

export default router;
