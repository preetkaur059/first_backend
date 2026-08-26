import express from "express"
import { getUsers } from "../controllers/userController.js"

const router = express.Router()

router.get("/", getUsers)

router.delete("/", ()=>{})

export default router 