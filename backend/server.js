import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbCon from "./utils/db.js";
const app = express()

import petRoute from './route/pet.route.js'
import userRoute from './route/user.route.js'

dotenv.config();
const PORT = process.env.PORT || 4002;


dbCon();
app.use(cors());
app.use(express.json());

//defining routes
app.use("/pet", petRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})