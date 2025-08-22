
function keysTransformation(obj){
   let result = {};
    for(let key in obj){
       result [key.toUpperCase()] = obj[key]
    }
 return result
}