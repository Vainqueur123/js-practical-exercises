 
 function convertNullableValues(obj){
let result = { ...obj };

for(let key in result){
    if(result[key] === null){
        result[key] = 0;
    }else if(result[key] === undefined){
        result[key] = "";
    }
}
return result;
 }
 


