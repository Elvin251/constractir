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
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     celebrateBirthday() {
//         this.age += 1;
//     }
// }
// let person4 = new Person("Ali", 14);
// console.log(`evvel ad gunu:${this.name} senin ${person4.age} yasin var`);
// person4.celebrateBirthday();
// console.log(`sonra ad gunu: ${this.name} senin ${person4.age} yasin var`);







// homework
// task1
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Car Information: ${this.year} ${this.make} ${this.model}`);
    }
}
let myCar = new Car("Toyota", "Camry", 2024);
myCar.displayInfo();
// task2
class FootBall {
    constructor(teamName, totalPlayers, trophies) {
        this.teamName = teamName;
        this.totalPlayers = totalPlayers;
        this.trophies = trophies;
    }

    calcReservePlayer() {
        return this.totalPlayers - 11;
    }
}
let myTeam = new FootBall("Real Madrid", 25, 15);
console.log(`Reserve Players: ${myTeam.calcReservePlayer()}`);

