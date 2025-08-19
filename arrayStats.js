/* 
Array statistics
You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

*/

function arrayStats(ArrNum) {
 let sum = ArrNum.reduce((acc, curr) => acc + curr, 0);
 let average = sum / ArrNum.length;
 let min = Math.min(...ArrNum);
 let max = Math.max(...ArrNum);

 return {sum, average, min, max};
};
