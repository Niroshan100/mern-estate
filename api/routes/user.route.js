import express from 'express';
import { test } from '../contrlloers/user.contrlloer.js';




const router = express.Router();

router.get('/test', test);
export default router;