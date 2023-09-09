//increment

let id=1
class user{
    constructor(name,age,income){
        this.name=name;
        this.age=age;
        this.income=income;
        this.id = id++;
    
    }

    static compareAge(user1,user2){
        return user1.age-user2.age
    }

    static compareIncome(user1,user2){
        return user1.income-user2.income
    }
}

const user1= new user('mohit',27,47000)
const user2= new user('kohit',37,4144)
const user3= new user('lohit',47,5555)
const user4= new user('tohit',17,5532)



console.log(user1,user2,user3,user4)

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