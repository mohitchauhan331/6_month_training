const numbers=[]; // array containing 50 numbers
for(let i=1;i<=50;i++){
    numbers.push(i);
}
const divisibleby3=[]; // larger array for numebers containing number divisible by 3
for(let i=0;i<numbers.length;i++){
    if (numbers[i]%3==0){
        divisibleby3.push(numbers[i]);
    }
}
console.log(divisibleby3); // print all numbers divisible by 3