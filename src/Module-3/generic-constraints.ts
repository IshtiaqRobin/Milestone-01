// const newData = { ...myInfo, crush };

type MandatoryTypes = {
    name: string,
    age: number,
    salary: number
};

interface MandatoryInterface {
    name: string,
    age: number,
    salary: number
};

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = "Suborna Islam";
    const newData = { ...myInfo, crush };
    return newData;
};

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}

const myInfo: MyInfoType = {
    name: "robin",
    age: 21,
    salary: 20000,
    other1: false,
    other2: null
};

const result5 = addMeInMyCrushMind(myInfo);
console.log(result5);