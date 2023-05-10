type PersonType = {
    name: string;
    age: number;
    address: string;
};

type newType = "name" | "age" | "address"; // eita manually kora

type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "age";
// const b: newTypeUsingKeyOf = "address"

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
};

const property = getProperty({ name: "robin", age: 21 }, "age");

// ({ name: 'robin', age: 21 }, 'age');