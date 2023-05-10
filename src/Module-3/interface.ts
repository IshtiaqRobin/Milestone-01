// // type alias

// type User = {
//     name: string;
//     age: number;
// };

// type extendedUser = User & {
//     role: string;
// };

// // interface 

// interface IUser {
//     name: string;
//     age: number;
// };

// interface IExtendedUser extends IUser {
//     role: string;
// };

// type RollNumber = number;

// //Object, Function, Array
// // function er khetre amra interface er theke type alias ke beshi use korbo.

// type AddsNumberType = (num1: number, num2: number) => number;

// // interface IAddNumbers {
// //     (num1: number, num2: number): number;
// // }

// type RollNumbersType = number[];

// interface IRollNumbers {
//     [index: number]: number;
// }

// const rollNumbers: RollNumbersType = [1, 2, 3]; // [index]

// const addNumbers: AddsNumberType = (num1, num2) => num1 + num2;
// // const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

// const user: IExtendedUser = {
//     name: "robin",
//     age: 22,
//     role: "10"
// }

// // const userWithTypeAlias: User = {
// //     name: "Type Alias",
// //     age: 15,
// // };

// // const userWithInterface: IUser = {
// //     name: "Interface",
// //     age: 20,
// // };
