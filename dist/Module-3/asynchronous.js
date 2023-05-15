"use strict";
// // Mocking 
// // Jason place holder
// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// };
// const getTodo = async (): Promise<ITodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await response.json();
// };
// const getTodoData = async () => {
//     const result = await getTodo();
//     console.log(result);
// };
// getTodoData();
// // string
// const makePromiseString = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = "Data is fetched";
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data!");
//         }
//     });
// };
// // boolean
// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = true;
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data!");
//         }
//     });
// };
// // Promise string, boolean, object, array, interface, type alias er maddomeo hoi.
// type DataType = {
//     data: string;
// };
// interface DataInterface {
//     data: string;
// };
// // object 
// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = { data: "Data is fetched" };
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data!");
//         }
//     });
// };
// // array
// const makePromiseArray = (): Promise<string[]> => {
//     return new Promise<string[]>((resolve, reject) => {
//         const data: string[] = ["robin", "raihan", "ishtiaq"];
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetch data!");
//         }
//     });
// };
// // string
// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromiseString();
//     return data;
// };
// // boolean
// const getPromiseDataBoolean = async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// };
// // object
// const getDataObject = async (): Promise<DataType> => {
//     const data = await makePromiseObject();
//     return data;
// };
// // array
// const getPromiseArray = async (): Promise<string[]> => {
//     const data = await makePromiseArray();
//     return data;
// }
// // Promise<string> Promise<boolean> Promise<object>
