import express, { Request, Response } from 'express'
import { dataSourceProvider } from '../../../configs';
import IDishModel, { Dish } from '../../../database/Models/dish.model';
import dishes from "../../../storages/dishes.json";
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  let data = null;

  const a = dataSourceProvider.local;

  if (req.query.provider === dataSourceProvider.local) {
		data = dishes[0]
	} else {
		data = null
	}

  res.send({
    "message": "This is a dish",
    "data": data,
  });
});

router.post('/save', (req: Request, res: Response) => {
  const dish: IDishModel = new Dish();

  dish.name = "Test";

  dish.save()
});

export default router;