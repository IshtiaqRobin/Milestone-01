"use strict";
// const a: newType = "age";
// const b: newTypeUsingKeyOf = "address"
function getProperty(obj, key) {
    obj[key];
}
;
const property = getProperty({ name: "robin", age: 21 }, "age");
// ({ name: 'robin', age: 21 }, 'age');
