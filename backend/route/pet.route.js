import express from "express"
import {getPet} from '../controller/pet.controller.js'

const router = express.Router();

router.get("/", getPet)

export default router;