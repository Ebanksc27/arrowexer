const PI = 3.14;
PI = 42; // Error: Assignment to constant variable.

// Difference between var and let? 
// var is function scoped and let is block scoped.
// var is hoisted and let is not.
// var can be redeclared and let cannot be redeclared.

// What is the difference between var and const? 
// var is function scoped and const is block scoped.
// var can be redeclared and reassigned and const cannot be redeclared or reassigned.
// var is hoisted and const is not.

// What is the difference between let and const?
// let can be reassigned and const cannot be reassigned.

// What is hoisting?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

const add = (x, y) => {
    return x + y;
}

[ 2, 3, 6, 78, 99, 104, 23 ].reduce((max, currNum) => {
    return Math.max(max, currNum);

});

// ES5 Map Callback
function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}
//Turn it into a one-liner 
const double = arr => arr.map(val => val * 2); 

//replace all functions with arrow functions: 
function squareAndFindEvens(numbers){
    var sqaures = numbers.map(function(num){
        return num ** 2;
    });
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}

//solution:
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);