const t = [1,2,3]

// const total = t.reduce(function(acc,curent){
//     console.log(`acc:${acc} and ${curent}`);
    
//     return acc + curent
// },0) //how to start value form 0

// console.log(total);


// reduce with arrow function 
// const myTotal = t.reduce((acc,curr)=> acc + curr ,0)

// console.log(myTotal);

const shoppingcard = [
    {
        itemname: "js",
        price:2999
    },
    {
        itemname: "cpp",
        price:999
    },
    {
        itemname: "md",
        price:5999
    },
    {
        itemname: "ds",
        price:12999
    },
]
const totalv =  shoppingcard.reduce((acc,item)=>acc+item.price,0) 
console.log(totalv);
