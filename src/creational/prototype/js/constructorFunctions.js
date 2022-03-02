const personPrototype = {
  firstName: 'Mary',
  lastName: 'Doe',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'OIE';
}
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('John', 'Doe', 30);
console.log(person1);
console.log(person1.fullName());

console.log('\n\n');

const person2 = new SubPerson('Mary', 'Doe', 31);
console.log(person2);
console.log(person2.fullName());
