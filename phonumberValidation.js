 const phoneNumberValidation = number => {

    if(number.length !== 12) {
        return "Number must be atleast to ten with dashes";
    }else if(number[0] !== '0'){
        return `you must start with zero`;
    }else if(number[1] !== '7'){
        return `the second digit must be 7`;
    }else if(number[3] !== '-' && number[7] !== '-'){
        return `you must include '-' at the 4th and 8th position`;
 }else{
    return `this number ${number} is valid`;
 }
 }