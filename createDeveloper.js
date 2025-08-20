function createDeveloper(level) {
  return function (name) 
  {
    return level + ' ' + name;
  };
}

const createSenior = createDeveloper('Senior');
const createJunior = createDeveloper('Junior');

console.log(createSenior('Eric'));
console.log(createJunior('Edson'));

// This function that curry another function in it and it will help to give name level its deserve 
// where it will take name of some on and give him or her level of Junior or Senior based on how level he is on