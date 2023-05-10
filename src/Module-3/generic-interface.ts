// // zodi object type er data hoi tahole amra type alias othoba interface use korte pari.
// // sob primitive type data er khetre amra type alias use korbo.

// // Generic Interface

// interface CrushInterface<T, U = null> {
//     name: string;
//     wife: T;
//     gf?: U;
// };

// interface PersonInterface {
//     name: string,
//     age: number
// }

// const crush6: CrushInterface<PersonInterface, PersonInterface> = {
//     name: "robin",
//     wife: {
//         name: "Moni",
//         age: 17
//     },
//     gf: {
//         name: "Moni Islam",
//         age: 17
//     }
// }

// const crush3: CrushInterface<boolean, string> = {
//     name: "Suborna Islam",
//     wife: true,
//     gf: "Moni Islam"
// };

// const crush4: CrushInterface<string> = {
//     name: 'Robin',
//     wife: "Moni"
// };

// interface WifeInterface { name: string, salary: number }


// const crush5: CrushInterface<WifeInterface> = {
//     name: "Robin",
//     wife: {
//         name: "Moni",
//         salary: 1000,
//     }

// }

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
