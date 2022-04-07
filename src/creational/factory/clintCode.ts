import { CarFactory } from './factories/carFactory';
import { randomVehicleAlgorithm } from './main/randomVehicleAlgorithm';
import { randomNumbers } from './utils/randomNumbers';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();

  const name = customerNames[randomNumbers(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();

  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);

  newCar.stop();
  console.log('---');
}
