import express from "express";
import mongoose from 'mongoose'
import dotenv from "dotenv";
import cors from "cors";
import petRoute from './route/pet.route.js'
import dbCon from "./utils/db.js";
const app = express()


dotenv.config();
const PORT = process.env.PORT || 4002;
const URI = process.env.MongoDBURI;


dbCon();
app.use(cors());
app.use(express.json());
//defining routes
app.use("/pet", petRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})