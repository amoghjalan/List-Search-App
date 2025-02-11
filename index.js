const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started on post ${PORT}`)
);
