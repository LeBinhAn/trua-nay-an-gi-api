import express from "express";
import dish from './dish';

const router = express.Router();

router.use("/dish", dish)

export default router;