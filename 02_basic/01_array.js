const arr = [1,2,3,4,5];
// console.log(arr);

// arr.push(6)
// arr.pop()
// arr.unshift(10)  // add value stating position in array 
// arr.shift() // remove value stating position in array
// console.log("A ", arr);

// const myarr2 = arr.splice(0,3) // 0 to 3 meanes 1,2,3
// console.log("B ", myarr2);


// const myarr3 = arr.slice(0,3) // meanes remove 0 to 3 and print 4,5
// console.log("c ", myarr3);

// ******* =>  add arra concat
const bca = ["sanjay","jay","vijay"]
const mca = ["rohan","riya","rohit"]

// const coures = bca.concat(mca)

// console.log(coures);

// ******* => spread operator

const new_Coures = [...bca,...mca] // allso used inside more array
// console.log(new_Coures);


// const first = [5,7,8,[2,7],8,0,[2,3,[5,7],69],7,3] //all sub array convert into single array

// const new_first = first.flat(Infinity) // infinity meanes all sub array
// console.log(new_first);


// console.log(Array.isArray("jitendra"));
// console.log(Array.from("jitendra"));

let a=10;
let b=20;
let c=30;

console.log(Array.of(a,b,c));
