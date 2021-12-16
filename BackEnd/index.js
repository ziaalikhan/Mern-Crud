const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Route From route-Js //
const route = require("./route/route.js");
// DotEnv Config //
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
// Running PORT //
const PORT = process.env.PORT || 5000;

// MongoDb connection //
const MONGO_DB_CONNECTION = process.env.mongodbConnection;
mongoose
  .connect(MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Is Connected SuccessFully===>>>"))
  .catch(() => console.log(error.message));

app.use(express.json());
app.use("/", route);

app.listen(PORT, () => console.log(`Server is Runing On This Port ${PORT}`));
