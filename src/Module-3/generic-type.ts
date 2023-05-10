// // generic type array
// // (T means Type)
// // zodi object type er data hoi tahole amra type alias othoba interface use korte pari.
// // sob primitive type data er khetre amra type alias use korbo.

// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["robin", "akram"];

// // type RelationWithSalaryType = { name: string, salary: number }

// interface RelationWithSalaryInterface {
//     name: string;
//     salary: number
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
//     {
//         name: "robin",
//         salary: 10000
//     },
//     "akram khan"
// ];

// const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [
//     {
//         name: "robin",
//         salary: 10000
//     },
//     "akram khan"
// ]

// type GenericArray<T> = Array<T>

// const rollNumbers: GenericArray<number> = [11, 12, 15];
// const rollNumbers2: GenericArray<string> = ['21', '55', '48'];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameAndRollType = { name: string; roll: number };

// const userNameAndRollNumbers: GenericArray<NameAndRollType> = [
//     {
//         name: "Mr. Robin",
//         roll: 20
//     },
//     {
//         name: "Ishtiaq",
//         roll: 15
//     }
// ]
