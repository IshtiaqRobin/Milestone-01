"use strict";
// ternary operator
var _a, _b;
const age = 22;
// if(age>=18){
//     console.log('Yes');
// }
// else{
//     console.log("No");
// }
const isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult);
// Nullish coalescing operator
// Null and Undefined
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "guest";
console.log({ userName }, { userName2 });
const Man1 = {
    name: 'robin',
    age: 22,
    address: {
        city: "No city",
        road: "No road"
    }
};
const home = (_b = (_a = Man1 === null || Man1 === void 0 ? void 0 : Man1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home"; // default "No Home"
console.log({ home });
let persons = ["robin", 25];
