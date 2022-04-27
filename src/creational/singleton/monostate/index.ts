import { MyDatabaseMonoState } from './myDatabaseMonostate';

const monostateDatabase = new MyDatabaseMonoState();
const monostateDatabase2 = new MyDatabaseMonoState();

monostateDatabase.setUsers({ name: 'Luiz', age: 30 });
monostateDatabase.setUsers({ name: 'Maria', age: 50 });
monostateDatabase.setUsers({ name: 'Eduardo', age: 25 });

monostateDatabase.getUsers();

monostateDatabase2.setUsers({ name: 'Ellie', age: 30 });
monostateDatabase2.setUsers({ name: 'William', age: 50 });
monostateDatabase2.setUsers({ name: 'Churchill', age: 25 });

monostateDatabase.getUsers();
