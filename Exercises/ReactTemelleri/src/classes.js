class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  salamla() {
    return "salam " + this.name;
  }
}
class Student extends Person {
  constructor(name, age, grad) {
    super(name, age);
    this.grad = grad;
  }
  sagol(text) {
    return text + super.salamla();
  }
}

let p3 = new Student("eli", 28, 4);

console.log(p3.sagol("axsam "));

console.log(p3.salamla());
console.log(p3);

let p1 = new Person("qurban", 28);
let p2 = new Person("kenan", 26);

console.log(p1.salamla());
console.log(p2.salamla());

console.log(p1);
console.log(p2);
