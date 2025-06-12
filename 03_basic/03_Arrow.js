// const user = {
//     uname: "jitu",
//     price: 20,

//     // welcome: function(){
//     //     console.log(`${this.uname}, welcome to website `);
        
//     // }
// }

// user.welcome()
// user.uname = "jitendra"
// user.welcome()

// console.log(this);



// function code(){
//     // console.log("this my code");
//     let username = "mona"
//     console.log(this.username);  //this not use in undefined
// }



// const code = () =>{
//     // console.log("this my code");
//     let username = "mona"
//     console.log(this.username);  //this not use in undefined
//     console.log(this); // only this  define {} empty object
// }
// code()

// arrow function

let two = (n1,n2) => {
    return n1 + n2  // retun key word use
}
console.log(two(3,4));



// const two = (num1,num2) => num1+num2 // or if you use {} than return key word compulsory
// const two = (num1,num2) => (num1+num2)
// const two = (num1,num2) => ({username:"jitu"}) //onject use in arrow function

// console.log(two(20,10));
