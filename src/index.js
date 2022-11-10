const express = require("express");
require("./db/connection");
const cors = require("cors");
const Router = require("./Routes/Router");


const port = process.env.PORT || 5000;
const app = express ();

app.use(cors());
app.use("/",Router)

app.listen(port,()=>{
  console.log(`Server Is Listening At Port ${port}`);
})