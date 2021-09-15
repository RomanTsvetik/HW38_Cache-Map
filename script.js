"use strict"

function mult(a) {
    return a * a
}

let cache = new Map();

let size = 10;

function calculator(func, ...args) {	

	if (cache.has(...args)) {
		console.log('from cache....');
		return cache.get(...args);
	}
	else {			
		let result = func(...args);

		if (cache.size >= size) {
		    let deletedEl = [...cache.keys()].shift();
		    cache.delete(deletedEl);						
		}

	cache.set(...args, result);

	return result;	
	}	
}

console.log(calculator(mult, 2))
console.log(calculator(mult, 4))
console.log(calculator(mult, 5))
console.log(calculator(mult, 4))
console.log(calculator(mult, 6))
console.log(calculator(mult, 5))
console.log(calculator(mult, 8))
console.log(calculator(mult, 9))
console.log(calculator(mult, 10))
console.log(calculator(mult, 11))
console.log(calculator(mult, 14))
console.log(calculator(mult, 24))
console.log(calculator(mult, 16))
console.log(calculator(mult, 15))
console.log(calculator(mult, 2))

console.log(`size: ${cache.size}`)
console.log(cache)


