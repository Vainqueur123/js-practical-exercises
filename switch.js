// What would be the output of the following code and why
const name = 'John';

switch (name) {
  case 'Jack':
    console.log('Found Jack');
    break;
  default:
    console.log("No one found");
  case 'Jim':
    console.log("Found Jim");
}
//We will get No one found because the name declared is not in what stated in cases and we will also have 
// Found Jim because after default there is no break to stop the excution.
