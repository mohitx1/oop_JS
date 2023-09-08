class BankAccount{
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


class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takeBuisnessLoan(amount){
        console.log('Taking Buisness loan:' + amount);
    }
}


class SavingAccount extends BankAccount{
    transactionLimit=10000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takeBuisnessLoan(amount){
        console.log('Taking Buisness loan:' + amount);
    }
}

const obj1=new CurrentAccount('Mohit',600000)
console.log(obj1);
obj1.deposit(5500)
console.log(obj1.balance)
obj1.withdraw(400)
console.log(obj1.balance)

const obj2=new SavingAccount('Rajesh')
console.log(obj2)