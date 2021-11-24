const express = require("express");
const app = express();

app.use(express.json({ extended: false }));



const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started on post ${PORT}`)
);