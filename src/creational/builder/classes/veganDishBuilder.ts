import { MealBuilderProtocol } from '../interfaces/mealBuilderProtocol';
import { MealBox } from './mealBox';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice('Arrow', 4);
    const beans = new Beans('Feijão', 7);

    this._meal.add(rice, beans);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
