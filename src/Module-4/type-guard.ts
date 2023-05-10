// keyof guard

type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric) {
    if (typeof param1 === "number" && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
};

add('1', '2');
add(1, 2);

// in guard

type NormalUserType = {
    name: string;
};

type AdminType = {
    name: string;
    role: "admin";
};