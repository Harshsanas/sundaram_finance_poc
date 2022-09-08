const express = require("express");

const app = express();

const cors = require("cors");

app.use(express.json()); // usefull while posting and updating;

app.use(cors());

//starting nodemon server
app.listen(3033, () => {
  console.log("listening on port 3033");
});
