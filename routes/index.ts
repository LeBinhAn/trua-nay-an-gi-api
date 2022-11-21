import express from 'express';
import apis from "./apis";

const router = express.Router();

router.use('/api', apis)
export default router;