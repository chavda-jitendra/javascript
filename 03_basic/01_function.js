// function name(){
//     console.log("hello");
// }
// name()

// function twovalueadd(a,b){
//     console.log(a+b);
// }

// twovalueadd(3,7)


// function twovalueadd(a,b){
//     let r = a+b;
//     return r;
// }
// let result =twovalueadd(10,10)
// console.log(result);


// function name(username){

//     return `${username} log in user`

// }
// // name("jitendra") // this not use value into the function
// console.log(name("jitendra")); // now it was use full


// function calculatePrice(val1, ...num){
//     return num
// }
// console.log(calculatePrice(200,300,400));


// object function
const user1 = {
    name : "jitu",
    email : "j@gmail.com"
}

function handleUsers(anyobject) {
    console.log(`user name is ${anyobject.name} and email is ${anyobject.email}`);
}
handleUsers(user1)


//array function
const myNewArray = [200,300,400]

function arrayvalue(newarray){
    return newarray[1]
}

console.log(arrayvalue(myNewArray));
