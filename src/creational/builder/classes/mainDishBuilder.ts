import { MealBuilderProtocol } from '../interfaces/mealBuilderProtocol';
import { MealBox } from './mealBox';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();

    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arrow', 3);
    const beans = new Beans('Feijão', 7);
    const meat = new Meat('Carne', 24);

    this._meal.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 7);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 10);

    this._meal.add(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
