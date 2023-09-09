//increment


class user{

    static id=1;
    static email='dummy@email.com';
    static dic={
        name:'mohit'
    }
    //to call static we use classname.varname we dont have to make instance object of that class

    constructor(name,age,income){
        this.name=name;
        this.age=age;
        this.income=income;
        this.id=user.id++;
        
    
    }

    static countf(){
        return this.id
        //this will only work when we call static instance from a static function
    }

    printEmail(){
        console.log(user.email)
    }
    //this.name will not work here for normal function

    static{
        console.log('This will be called automatically whenever static function called only once');

    }
    static printEmail(){
        console.log(this.email)
    }
    static printdic(){
        console.log(this.dic);
        
        //this will only work when we call static instance from a static function
    }


}

const user1= new user('mohit',27,47000)
const user2= new user('kohit',37,4144)
const user3= new user('lohit',47,5555)
const user4= new user('tohit',17,5532)

user4.printEmail()


console.log(user1,user2,user3,user4)
console.log(user.countf())
console.log(user.id)
console.log(user.email)
user.printdic();
//this will only work when we call static instance from a static function

// //<---->

// //utility functions
// class user{
//     constructor(name,age,income){
//         this.name=name;
//         this.age=age;
//         this.income=income;
    
//     }

//     static compareAge(user1,user2){
//         return user1.age-user2.age
//     }

//     static compareIncome(user1,user2){
//         return user1.income-user2.income
//     }
// }

// const user1= new user('mohit',27,47000)
// const user2= new user('kohit',37,4144)
// const user3= new user('lohit',47,5555)
// const user4= new user('tohit',17,5532)


// const users=[user1,user2,user3,user4]
// // users.sort(user.compareAge)
// users.sort(user.compareIncome)
// console.log(users)


//static function inbuilt
//Math.random();//static function inbuilt
//Object.hasOwnProperty()