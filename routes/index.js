import express from "express";
const router = express.Router();
import cors from "cors";
router.use(cors());

import { getAllUsers, addUserToTable } from "../models/users.js";

router
	.route("/users")
	.post(async (req, res) => {
		const { fullname, nickname, city, hobbies } = req.body;
		console.log(req.body);

		const result = await addUserToTable(fullname, nickname, city, hobbies);
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
export default router;
