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

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

export default app;
