// const mySum = Symbol("key1") //important

const user = {
    name: "jitendra",
    age: 18,
    email: "jitendra@gmail.com",
    days: ['monday','saturday']
    // [mySum]: "mykey1"
}

// console.log(user.name);
// console.log(user.mySum);
// console.log(user[mySum]);

// Object.freeze(user) //if I can freeze object than new changes not allowed

// user.email = "jitu@gmail.com" //this change in email
// console.log(user);  // full object o/p


user.message1 = function(){
    console.log("hello this message");
}
user.message2 = function(){
    console.log(`hello this message, ${this.name} `);
}
console.log(user.message1());
console.log(user.message2());




