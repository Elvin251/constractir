// class Person {
//     constructor(surname, name, age, gender){
// this.surname=surname,
// this.name=name,
// this.age=age,
// this.gender=gender

//     }
// }
// let person1= new Person("Memmedov","Elvin",14,"kisi");
// let person2= new Person("Rehimov","Seymur",14,"kisi");
// let person3= new Person("Memizade","Yusif",14,"kisi");
// console.log(person1,person2,person3);


// task2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    celebrateBirthday() {
        this.age += 1;
    }
}
let person4 = new Person("Ali", 14);
console.log(`evvel ad gunu:${this.name} senin ${person4.age} yasin var`);
person4.celebrateBirthday();
console.log(`sonra ad gunu: ${this.name} senin ${person4.age} yasin var`);
