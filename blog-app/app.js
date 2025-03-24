require("dotenv").config();
const express = require("express");
const app = express();

PORT = 4000 || process.env.PORT;

app.use("/wiki/rema", require("./routes/main"));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
