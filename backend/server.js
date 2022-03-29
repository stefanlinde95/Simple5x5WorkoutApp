const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Added 29.03
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, "../frontend/build")));
//   app.get("*", function (req, res) {
//     res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
//   });
// }

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running");
});
