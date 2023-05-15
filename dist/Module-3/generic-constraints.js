"use strict";
// const newData = { ...myInfo, crush };
;
const addMeInMyCrushMind = (myInfo) => {
    const crush = "Suborna Islam";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "robin",
    age: 21,
    salary: 20000,
    other1: false,
    other2: null
};
const result5 = addMeInMyCrushMind(myInfo);
console.log(result5);
