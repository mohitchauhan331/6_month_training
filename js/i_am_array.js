// Create an array with numbers from 0 to 20
let i_am_array = [];
for (let i = 0; i <= 20; i++) {
    i_am_array.push(i);
}
console.log( i_am_array); // Print all numbers from 0 to 20
console.log(typeof i_am_array); // Print the type of the array

// Create a new array with all numbers multiplied by 3
let teen_guna = [];
for (let i = 0; i < i_am_array.length; i++) {
    teen_guna.push(i_am_array[i] * 3); // Multiply each number by 3
}
console.log( teen_guna); // Print all numbers multiplied by 3
console.log(teen_guna.length); // Print the length of the array
console.log( typeof teen_guna); // Print the number at index 10
