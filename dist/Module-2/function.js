"use strict";
// // normal function
// // default parameter
// function add(num1:number, num2:number=10): number{
// return num1+ num2;
// }
// add(30,50);
// // spread operator
// const myFriends=['akram', 'taskin', 'arafat'];
// const newFriends = ['sadia', 'afrin', 'riya'];
// const myBestFriend ={
//     fullName: "Akram Khan",
//     age: 21
// }
// const [bestFriend] = myFriends;
// const { fullName: string }= myBestFriend;
// console.log({ string });
// myFriends.push(...newFriends);
// // console.log(myFriends);
// // rest parameter
// const greatFriends = (...friends: string[]): void => friends.forEach((friend)=>console.log(`Hi ${friend}`));
// greatFriends("rahul", "raju", "raihan", "mustakin", "afrin", "riya");
// const addArrow = (num1: number, num2: number): number=>num1+ num2;
// const arr =[1,2,3,4];
// const newArray = arr.map((elem:number) => elem*elem);
// const person:{
//     name:string,
//     balance: number,
//     addBalance(money: number): void,
// } = {
//     name: "robin",
//     balance: 5,
//     addBalance(money:number){
//         console.log(`My new balance ${this.balance+money}`)
//     }
// }
