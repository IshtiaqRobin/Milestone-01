// ternary operator

const age: number = 22;

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
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "guest";
console.log({ userName }, { userName2 });

type Man = {
    name: string,
    age: number,
    address: {
        city: "No city",
        road: "No road",
        home?: "";
    };
};

const Man1: Man = {
    name: 'robin',
    age: 22,
    address: {
        city: "No city",
        road: "No road"
    }
}

const home = Man1?.address?.home ?? "No Home" // default "No Home"
console.log({ home });

let persons: [string, number] = ["robin", 25];
