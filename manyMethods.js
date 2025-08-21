
function myMap(num){
  let newArr = [];

  for (let i = 0; i < num.length; i++){
     newArr.push(num[i] * 2);
  }
  return newArr;
} 

function myFilter(numm){
  
    let newFiltered = [];

    for (let i = 0; i < numm.length ; i++){
        if(numm[i] % 2 !== 0 ){
          newFiltered.push(numm[i] * 3)
        }
    }
    return newFiltered;
}

console.log(myFilter([3,4,5,6,7,8,9]))

function myReduce(nummm){
   let sum = 0;
  for(let i = 0; i < nummm.length; i++){
      sum += nummm[i];
  }
  return sum;
}
console.log(myReduce([3,4,5,6,9]))


function myForEach(num1){
  
let eachNum = [3,45,6,7,65]

  for (let i = 0; i < eachNum.length; i++){
   console.log(eachNum[i] * 2);
  }
} 
myForEach()