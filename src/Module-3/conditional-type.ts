// a type depends on another type

type a1 = null;
type a3 = undefined;
type a4 = number;

// question mark (?) diye condition korle mark er dite hobe condition ebong mark er pore dite hobe truthy value, ar semicolon (:) er pore dite hobe falsy value.   
type a2 = a1 extends string ? string : null;

// nested condition
type d = a1 extends null
    ? null
    : a3 extends number
    ? number
    : a4 extends null
    ? null
    : never;

type Sheikh = {
    wife1: string;
    wife2: string;
};



// check korbe ei Sheikh type a wife2 ase kina ? true : false;