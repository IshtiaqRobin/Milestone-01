"use strict";
// // keyof guard
// type Alphanumeric = string | number;
// function add(param1: Alphanumeric, param2: Alphanumeric) {
//     if (typeof param1 === "number" && typeof param2 === 'number') {
//         return param1 + param2;
//     } else {
//         return param1.toString() + param2.toString();
//     }
// };
// add('1', '2');
// add(1, 2);
// // in guard
// type NormalUserType = {
//     name: string;
// };
// type AdminType = {
//     name: string;
//     role: "admin";
// };
// function getUser(user: NormalUserType | AdminType) {
//     if ('role' in user) {
//         return `I am an admin and my role is ${user.role}`
//     } else {
//         return `I am a normal user`
//     }
// };
// const normalUser1: NormalUserType = { name: "Robin" };
// const adminUser1: AdminType = { name: "Ishtiaq Robin", role: "admin" };
// // console.log(getUser(normalUser1));
// // console.log(getUser(adminUser1));
// // instanceof guard
// class Animal {
//     name: string;
//     species: string;
//     constructor(name: string, species: string) {
//         this.name = name
//         this.species = species
//     }
//     makeSound() {
//         console.log("I am making sound");
//     }
// };
// class Dog extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeBark() {
//         console.log("I am barking");
//     }
// };
// class Cat extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species);
//     }
//     makeMeow() {
//         console.log("I am Meowing");
//     }
// };
// function isDog(animal: Animal): animal is Dog {
//     return animal instanceof Dog
// };
// function isCat(animal: Animal): animal is Cat {
//     return animal instanceof Cat
// };
// function getAnimal(animal: Animal) {
//     if (isDog(animal)) {
//         animal.makeBark();
//     }
//     else if (isCat(animal)) {
//         animal.makeMeow();
//     }
//     else {
//         animal.makeSound();
//     }
// };
// const animal1 = new Dog('Germen Dog', 'dog'); // instance => Dog
// const animal2 = new Cat('Cat vai', 'cat'); // instance => Dog
// getAnimal(animal2);
