let detail = 'Hello!! this is Ali Ashraf. From Dhaka Bangladesh.'

let result = detail.split('').reverse().join('')

console.log(result);

// Using for loop

let reverseString = ''
for(let i = 0; i < detail.length; i++){
    let element = detail[i];
    reverseString = element + reverseString;
}
console.log(reverseString);
