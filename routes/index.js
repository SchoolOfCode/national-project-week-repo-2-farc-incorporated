import express from "express";
const router = express.Router();
// import cors from "cors";
// router.use(
//   cors({
//     origin: "https://bootcampersproject.herokuapp.com/",
//   })
// );

import {
  getAllUsers,
  addUserToTable,
  deleteUserFromTable,
} from "../models/users.js";

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
router
  .route("/users/:id")

  .delete(async (req, res) => {
    const { id } = req.params;
    await deleteUserFromTable(id);
    res.json({ success: true, message: "user has been deleted" });
  });

export default router;
