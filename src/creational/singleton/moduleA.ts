// import { MyDatabaseClassic } from './database/myDatabaseClassic';
// import { MyDatabaseModule } from './database/myDatabaseModule';
import { MyDatabaseFunction } from './database/myDatabaseFunction';
import { myDatabaseB as myDatabaseFromModuleB } from './moduleB';

export const myDatabaseA = MyDatabaseFunction;

myDatabaseA.add({ name: 'Luiz', age: 30 });
myDatabaseA.add({ name: 'Maria', age: 50 });
myDatabaseA.add({ name: 'Eduardo', age: 25 });

console.log(myDatabaseA === myDatabaseFromModuleB);
