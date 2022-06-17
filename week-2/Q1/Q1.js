function max(numbers) {
let maxN = numbers[0];
for(let i = 1; i < numbers.length; i++ ){
   if(maxN < numbers[i]){
    maxN = numbers[i];
   }
}
return maxN;
}



max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7
console.log(max([1, 2, 4, 5]))
console.log(max([5, 2, 7, 1, 6]))