
var namevar = 'Elijah'
namevar = 'mike'
console.log('Name',namevar);

//valid
let nameLet = 'John'
//Can do this
nameLet = 'Rob'
console.log('nameLet',nameLet);


const nameConst = 'Frank'
//can't do This
//const nameConst = 'Frank'
console.log('nameConst',nameConst);

//Block scoping

var fullName = 'Elijah Prince'

if (fullName) {
  const firstName = fullName.split(' ')[0]
  console.log(firstName);
}

console.log(firstName);
