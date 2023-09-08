function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;


    // this.deposit=function(amount){
    //     this.balance+=amount;
    // }

    // this.withdraw=(amount)=>{
    //     this.balance-=amount;
    // }
}


// const rajesh=new BankAccount('Rajesh')
// const john=new BankAccount('john',1000);

// console.log(rajesh)
// console.log(john)

// BankAccount.prototype.test='This is test'
// console.log(BankAccount.prototype)

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}

BankAccount.prototype.withdraw=function(amount){
    this.balance-=amount;
}
const john=new BankAccount('john',1000);
console.log(john)
john.deposit(2000)
console.log(john)
john.withdraw(1500)
console.log(john)