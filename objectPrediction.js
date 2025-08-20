const john = {
	age:20,
	address: {
		country: 'USA',
		city: 'New York'
	}
}

const mark = {
	age:20,
	address: john.address
}

mark.address.city = 'Frolida'

console.log(john)
console.log(mark)

// with this above we will get two same data but of the different object 
// the cause of this is that they are or in the same age and also we have set the address of John to the address of 
// Mark that led to the same address and also they have the same city because we have set mark.address.city that change 
//city to be the same this change city of John to be the same of Mark and the address of John to be the same as the mark
//ones