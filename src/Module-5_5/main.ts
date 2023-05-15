// import * as Methods from './module'; // while cut import

// import allFile from './module';

// import addTwo from './utils/add';
// import multiply from './utils/multiply';
// import divided from './utils/divided';
// import average from './utils/average';

import methods from './utils/index'

const add = (param1: number, param2: number): number => {
    return param1 + param2;
};

const res1 = methods.addTwo(10, 20);
const res2 = methods.multiply(10, 20);
const res3 = methods.average(10, 20);