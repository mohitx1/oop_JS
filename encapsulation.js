class BankAccount{
    customerName;
      accountNumber=Date.now();
      #balance=0
  
      constructor(customerName,balance=0){
          this.customerName=customerName;
          this.accountNumber=Date.now();
          this.#balance=balance
      };
  
      deposit(amount){
          this.#balance+=amount;
      };
  
      withdraw(amount){
          this.#balance-=amount;
      };

      setBalance(amount){
        if (isNaN(amount)){
            throw new Error('Amount is Not a valid input')
        }else{
        this.#balance= +(this.#balance+ +amount);
        //three time +used 1st time to convert into integer
        //here second + is used to add this.balance and amount and the third + just before amount is used to convert the amount argument to integer
        return `An amount of ${amount} deposited to your account. Your updated balance is ${this.#balance}`
      }
    }

      getBalance(){
        return this.#balance
      }
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


const obj1= new BankAccount('Mohit',50000);
// console.log(obj1.#balance)
//// this will create a new balance, balance and #balance are two different
//// obj1.balance='Hehehe'
////console.log(obj1.balance)
// obj1.setBalance('hello')//this will throw new error
// obj1.setBalance('400')//this will convert into number and not throw any error

// console.log(obj1.getBalance())

console.log(obj1.setBalance('22'));
console.log(obj1.getBalance());
