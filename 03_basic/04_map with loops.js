const map = new Map() //map does not iterative

map.set('ind',"india")
map.set('usa',"united stat of america")
map.set('fr',"france")
// map.set('ind',"india")  //in map unique values set in o/p does not show

// console.log(map);


// in for of loop use in map 

for(const [key,valus] of map)
{
    // console.log(key, '=', valus); 
}


// map in for in loop with object 

// const book = {
//     name: 'gir', 
//     price: 20
// }
// for (const key in book) {
//    console.log(`${key} = ${book[key]}`);
// }

// const language = ["js","c++","rb","java"]
// for (const key in language){
//     console.log(language[key]);
// }


const language = ["js","c++","rb","java"]
// language.forEach(function(val){
//     console.log(val);
// })

// arrow function 
// language.forEach((item)=>{
//     console.log(item);
// })

// function printme(item)
// {
//     console.log(item);   
// }
// language.forEach(printme)


language.forEach((item,index,ar)=>{
    console.log(item,index,ar);
})
