function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;


    this.deposit=function(amount){
        this.balance+=amount;
    }

    this.withdraw=(amount)=>{
        this.balance-=amount;
    }
}
// const mohitAcoount=new BankAccount('Mohit',4000);
// const rajeshAccount=new BankAccount('rajesh');

// console.log(mohitAcoount);
// console.log(rajeshAccount.accountNumber);
// // rajeshAccount.balance=2000;
// // console.log(rajeshAccount.balance)
// rajeshAccount.deposit(5000)
// console.log(rajeshAccount.balance);
// rajeshAccount.withdraw(2000);
// console.log(rajeshAccount.balance)
// mohitAcoount.deposit(2000);
// console.log(mohitAcoount.balance)

//=================================================================================================


const accounts=[];

////createaccount
const accountForm=document.getElementById('accountForm');
const customerName=document.getElementById('customerName')
const balance=document.getElementById('balance')

////depositeform
const depositForm=document.getElementById('depositForm');
const accountNumber=document.getElementById('accountNumber')
const amount=document.getElementById('amount')


accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account= new BankAccount(customerName.value , +balance.value);
    accounts.push(account);
    console.log(accounts)
})

depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account= accounts.find((account)=>account.accountNumber=== +accountNumber.value)
    account.deposit(+amount.value);
    console.log(accounts)
})