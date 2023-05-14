// class BankAccount {
//     public readonly id: number;
//     public name: string;
//     private _balance: number; // jokkhon amra kono ekta privet property use korbo tokkhon amra ekta (_) use korbo.

//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     };

//     // getter
//     get balance(): number {
//         return this._balance
//     };
//     // getBalance(): number {
//     //     return this._balance
//     // }

//     // setter
//     set deposit(amount: number) {
//         this._balance = this._balance + amount;
//     };

//     // addDeposit(amount: number) {
//     //     this._balance = this._balance + amount;
//     // }
// };

// class StudentAccount extends BankAccount {
//     test() {
//         // this._balance
//     };
// }

// const myAccount = new BankAccount(404, "Robin", 250);

// // myAccount.addDeposit(20);
// // myAccount.getBalance();
// console.log(myAccount.balance);
// myAccount.deposit = 20;
// console.log(myAccount.balance);