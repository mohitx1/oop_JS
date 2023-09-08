// const Rajesh= new BankAccount('Rajesh', 1000);
// console.log(Rajesh);
// Rajesh.deposit(90000);
// console.log(Rajesh.balance);
////Hoisting will not work with classes it only works with function of JS will throw reference error.


class BankAccount{
// const BankAccount=class{
////This will also work but change the name of constructor to only class instead of class BankAccount
    customerName;
    accountNumber=Date.now();
    balance=0

    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance
    };

    deposit(amount){
        this.balance+=amount;
    };

    withdraw(amount){
        this.balance-=amount;
    };
};


var Mohit= new BankAccount('Mohit', 1000);
console.log(Mohit);
Mohit.deposit(90000);
console.log(Mohit.balance);

const Alok=new BankAccount('Alok');
Alok.deposit(6000)
Alok.withdraw(500)
console.log(Alok.balance)