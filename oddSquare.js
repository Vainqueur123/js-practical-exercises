/*
 You are given an array of numbers. Your task is to implement a 
 function called oddSquares that filters out the even numbers 
 from the array and then maps the remaining numbers to their squares.
 */
 
 function oddSquares(numbers){
   let odd = numbers.filter((num) => num % 2 !== 0);
   let squares = odd.map((nums)=> nums * nums)

   return squares;
 }
 console.log(oddSquares([1,2,6,7,8,9,7,6,6,5,4]))