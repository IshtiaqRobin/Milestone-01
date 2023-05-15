// Pick

interface Person {
    name: string;
    email?: string;
    contactNo: string;
}

type Contact = Pick<Person, "contactNo" | "email">;
// zei gula lagbe ta pauyar jonno (Pick) use korbo.

// Omit

type Name = Omit<Person, "contactNo" | "email">;
// zei gula lagbe na sei gula bad diye onno gula pauyar jonno (Omit) use korbo.

// Partial
// To make all the properties be optional type

type Optional = Partial<Person>;

// Required
type RequiredProperties = Required<Person>;

// Readonly type

const person: Readonly<Person> = {
    name: "ishtiaq",
    email: "robin.pass36@gmail.com",
    contactNo: "+880 1762-627422",
};

// person.name = "robin"

// Record type

// type myObj = {
//     a: string;
//     b: string;
//     c: string;
// };

// using index signature

// type myObj = {
//     [key: 'a' | 'b' | 'c']: string;
// };

// Record 'a' | 'b' | 'c'
type myObj = Record<'a' | 'b' | 'c' | 'd', string>

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4"
};
