const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers?.map((number) => number.toString());
console.log(arrayOfStrings);

type Volume = {
    height: number;
    width: number;
    depth: number;
};

type Area<T> = {
    // [key in keyof Volume]: Volume[key];
    readonly [key in keyof T]: T[key];
};

const area1: Area<{ height: number, width: string }> = {
    height: 10,
    width: "12"
};

// area1.height = 20;

type AreaString = {
    height: string;
    width: string;
};

type AreaReadonly = {
    readonly height: number;
    readonly width: number;
};

const rectangularArea: AreaReadonly = {
    height: 10,
    width: 12
};

// rectangularArea.height = 20;

type A = Volume['height']; // look up types
type B = keyof Volume; // "width" | "height"