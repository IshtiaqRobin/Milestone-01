// // interface

// // interface IVehicle {
// //     name: string;
// //     model: string;
// // };

// // const vehicle: IVehicle = {
// //     name: 'car',
// //     model: '210mx'
// // };

interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
};

class Car implements Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }

    startEngine(): void {
        console.log('I am starting engine');
    }
    stopEngine(): void {
        console.log('I am stooping engine');
    }
    move(): void {
        console.log('I am moving engine');
    }
};

const vehicle1 = new Car('Car', 'BMW', 2023);

// abstract

// abstract class Vehicle {
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number
//     ) { }

//     abstract startEngine(): void
//     abstract stopEngine(): void
//     move(): void {
//         console.log('I am moving engine');
//     }
// };

// class Car extends Vehicle {
//     startEngine(): void {
//         console.log('I am starting engine');
//     }
//     stopEngine(): void {
//         console.log('I am stooping engine');
//     }
// }

// const car1 = new Vehicle('Car', 'Lamborghini', 2022);