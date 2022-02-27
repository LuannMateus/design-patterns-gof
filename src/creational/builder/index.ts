import { MainDishBuilder } from './classes/mainDishBuilder';
import { MealBox } from './classes/mealBox';
import { Beans, Meat, Rice } from './classes/meals';
import { VeganDishBuilder } from './classes/veganDishBuilder';

// Composite pattern
console.log('\n=== Composite Example ===\n');
const rice = new Rice('Arrow', 3);
const beans = new Beans('Feijão', 7);
const meat = new Meat('Carne', 24);

const mealBox = new MealBox();
mealBox.add(rice, beans, meat);

console.log(mealBox);
console.log(mealBox.getPrice());

// Builder pattern
console.log('\n=== Builder Example ===\n');

const mainDishBuilder = new MainDishBuilder();

const mainMealTotal = mainDishBuilder.makeMeal().getPrice();
console.log(`Prato padrão: R$ ${mainMealTotal}`);

const veganDishBuilder = new VeganDishBuilder();

const veganMealTotal = veganDishBuilder.makeMeal().getPrice();
console.log(`Prato vegano: R$ ${veganMealTotal}`);
