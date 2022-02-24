// import { MyDatabaseClassic } from './database/myDatabaseClassic';
// import { MyDatabaseModule } from './database/myDatabaseModule';
import { MyDatabaseFunction } from './database/myDatabaseFunction';
import { myDatabaseA as myDatabaseFromModuleA } from './moduleA';

export const myDatabaseB = MyDatabaseFunction;

myDatabaseB.add({ name: 'Roberto', age: 30 });
myDatabaseB.add({ name: 'Joana', age: 50 });
myDatabaseB.add({ name: 'Luíza', age: 25 });

myDatabaseB.show();

console.log(myDatabaseB === myDatabaseFromModuleA);
