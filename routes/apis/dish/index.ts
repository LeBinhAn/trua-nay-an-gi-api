import express, { Request, Response } from 'express'
import dishes from "../../../storages/dishes.json";
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send({
    "message": "This is a dish",
    "data": dishes[0]
  });
});

export default router;