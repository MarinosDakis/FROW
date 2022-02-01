import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js"

// second variable leads to specific controller
router.post("/signin", signin);
router.post("/signup", signup);

export default router;