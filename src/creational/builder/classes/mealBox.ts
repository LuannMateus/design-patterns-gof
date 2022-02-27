import { MealCompositeProtocol } from '../interfaces/mealCompositeProtocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((meal) => this._children.push(meal));
  }
}
