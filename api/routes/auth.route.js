import express from 'express';
import { signup } from '../contrlloers/auth.contrlloer.js';


const router = express.Router();


router.post('/signup',signup);

export default router;