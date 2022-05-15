import { ProductCustomizationDecorator } from './product/productCustomizationDecorator';
import { ProductDecorator } from './product/productDecorator';
import { TShirt } from './product/tShirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductDecorator(tShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirtWithStamp);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
