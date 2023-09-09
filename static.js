//utility functions
class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    
    }
}

const user1= new user('mohit',27)
const user2= new user('kohit',37)
const user3= new user('lohit',47)
const user4= new user('tohit',17)


const users=[user1,user2,user3,user4]
users.sort((a,b)=>a.age-b.age)
console.log(users)