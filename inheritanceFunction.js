////DRY{Do Not Repeat};

function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;
};

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
};

BankAccount.prototype.withdraw=function(amount){
    this.balance-=amount;
};


function CurrentAccount(customerName,balance=0){
    BankAccount.call(this,customerName,balance);  //this is called constructor linking
    this.transactionLimit=5000;
};

CurrentAccount.prototype=Object.create(BankAccount.prototype)





function SavingAccount(customerName,balance=0){
    BankAccount.call(this,customerName,balance);  //this is called constructor linking
    this.transactionLimit=1000;
};

SavingAccount.prototype=Object.create(BankAccount.prototype)

SavingAccount.prototype.takePersonLoan=function(amount){
    console.log(`Taking personal loan of: ${amount}$`)
}


const alok=new SavingAccount('alok kr',1000);
alok.deposit(8000)
alok.withdraw(500)
// console.log(alok)
alok.takePersonLoan(5500)

// const obj1=new CurrentAccount('alok kr',1000);
// obj1.deposit(700)
// console.log(obj1)


