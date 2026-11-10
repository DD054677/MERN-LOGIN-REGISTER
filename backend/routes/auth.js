import express from "express";
import { protect } from "../middleware/auth.js";
import { login, me, register } from '../controller/auth.controller.js';

const router = express.Router();


router.post('/register', register)

router.post('/login', login)


router.get('/me', protect, me)

export default router;