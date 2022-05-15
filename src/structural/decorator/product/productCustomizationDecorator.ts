import { ProductDecorator } from './productDecorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (Customizada)';
  }

  getPrice(): number {
    return this.product.getPrice() + 50;
  }
}
