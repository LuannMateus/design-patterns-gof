import { Vehicle } from '../vehicle/vehicle';
import { BicycleFactory } from '../factories/bicycleFactory';
import { CarFactory } from '../factories/carFactory';
import { randomNumbers } from '../utils/randomNumbers';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');
  const bicycle = bicycleFactory.getVehicle('Bicycle');

  const vehicles = [car1, car2, bicycle];

  return vehicles[randomNumbers(vehicles.length)];
}
