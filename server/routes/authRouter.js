import express from "express"
import { register } from "../controllers/authCont"
const router = express.Router()

router.post("/register", register)

module.exports = router
