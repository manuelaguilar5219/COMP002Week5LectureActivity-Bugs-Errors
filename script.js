myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) { // changed 1 to zero and removed the "="

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

function validateNumber(input) {
    if (typeof input !== 'number' || input < 0 || input > 100) {
        return 'Input must be a number between 0 and 100';
    }
    return 'Input is valid';
}

console.log(validateNumber(50));  // Output: Input is valid
console.log(validateNumber(101)); // Output: Input must be a number between 0 and 100

