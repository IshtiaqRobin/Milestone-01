// class BankAccount {
//     public readonly id: number;
//     public name: string;
//     protected _balance: number; // jokkhon amra kono ekta privet property use korbo tokkhon amra ekta (_) use korbo.

//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     getBalance() {
//         console.log(`My current balance is : ${this._balance}`);
//     }
//     addDeposit(amount: number) {
//         this._balance = this._balance + amount;
//     }
// };

// class StudentAccount extends BankAccount {
//     test() {
//         this._balance
//     }
// }

// const myAccount = new BankAccount(404, "Robin", 2500);

// console.log(myAccount);