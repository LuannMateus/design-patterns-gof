import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterpriseCustomer';
import { EnterpriseCar } from '../vehicle/enterpriseCar';
import { VehicleProtocol } from '../vehicle/vehicleProtocol';
import { CreateCustomerVehicleFactory } from './customerVehicleFactory';

export class EnterpriseCustomerVehicleFactory
  implements CreateCustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);

    return new EnterpriseCar(vehicleName, customer);
  }
}
