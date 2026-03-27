console.log("Hello BSIS!")
let userName: string = "Margaux Austria";
let userAge = 21;

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)
console.log(`Username - ${userName}, Age - ${userAge}`)

function add(a: number, b = 21) {
    return a + b
}

function multiply(a: number, b: number) {
    return a * b;
}

console.log(add(20, 123))
console.log(multiply(243, 5))