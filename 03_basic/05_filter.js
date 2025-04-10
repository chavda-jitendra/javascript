const number = [1,2,3,4,5,6,7,8,9]
// const number1 = number.filter((num)=>{
//    return num > 4
// })
// console.log(number1);

const newArrow =[]

number.forEach((num)=>{
    if(num>4){
        newArrow.push(num)
    }
})
console.log(newArrow);
