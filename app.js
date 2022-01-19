import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use("/", router);
app.use(cors());

const port = normalizePort(process.env.PORT || "4444");
app.set("port", port);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.listen(4444, () => {
// 	console.log(`Listening on port 4444`);
// });

export default app;
