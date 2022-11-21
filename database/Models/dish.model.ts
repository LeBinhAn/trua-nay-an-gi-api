import { model, Model, Schema, Document } from 'mongoose'
import { iDish } from '../../intefaces/dish.interface';

export default interface IDishModel extends iDish, Document {};

const DishSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: [true, "Dish name is required"]
  },
});

export const Dish: Model<IDishModel> = model<IDishModel>('Dish', DishSchema);