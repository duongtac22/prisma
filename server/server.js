const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const PORT = 8080;
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => console.log(error));
database.once("connected", () => {
  console.log("Database Connected");
});
app.use("/api", routes);
app.use(cors());

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
