import { Customer } from '../customer/customer';
import { VehicleProtocol } from '../vehicle/vehicleProtocol';

export interface CreateCustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
