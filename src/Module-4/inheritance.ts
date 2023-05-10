// class Parent {
//     name: string;
//     age: number;
//     address: string

//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     makeSleep(hours: string): string {
//         return `This ${this.name} will sleep for ${hours}`;
//     }
// };

// class Student extends Parent {
//     constructor(name: string, age: number, address: string) {
//         super(name, age, address);
//     }
// };

// const stundent1 = new Student("Robin", 21, "Faridpur");

// class Teacher extends Parent {
//     designation: string
//     constructor(name: string, age: number, address: string, designation: string) {
//         super(name, age, address);
//         this.designation = designation;
//     }

//     takeClasses(numOfClass: string): string {
//         return `This ${this.name} will take ${numOfClass} class`;
//     }
// };

// const teacher1 = new Teacher("Mr. Robin", 21, "Faridpur", "Master");

// // important: common property ebong method gula ke caile ekta common class e rakhte pari ebong sei common class ke bolbo hocche Parent class ebong sei common class ze method ba property gula ke inherit kore Child class toiri korbo zate automatically sei method ba property gula Child class er moddhe cole ase.