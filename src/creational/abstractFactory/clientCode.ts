import { EnterpriseCustomerVehicleFactory } from './factories/enterpriseCustomerVehicleFactory';
import { IndividualCustomerVehicleFactory } from './factories/individualCustomerVehicleFactory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'John');
const car2 = individualFactory.createVehicle('Celta', 'Mary');

car1.pickUp();
car2.pickUp();
