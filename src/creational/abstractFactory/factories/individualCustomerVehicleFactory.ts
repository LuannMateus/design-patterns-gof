import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individualCustomer';
import { IndividualCar } from '../vehicle/individualCar';
import { VehicleProtocol } from '../vehicle/vehicleProtocol';
import { CreateCustomerVehicleFactory } from './customerVehicleFactory';

export class IndividualCustomerVehicleFactory
  implements CreateCustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);

    return new IndividualCar(vehicleName, customer);
  }
}
