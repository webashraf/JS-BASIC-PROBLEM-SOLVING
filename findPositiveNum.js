const numbers = [12, 43, 54, 987, 65, -45, 65, 76, -56, 76, 45];
const positiveNum = [];
for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    if(number > 0)positiveNum.push(number) 
    else break;
}
console.log(positiveNum);