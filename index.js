// Numbers to check
const numbers = [12, 25, 42, 53, 60];

// Determine if each number is even or odd using if-else statements
numbers.forEach(number => {
  let result = '';

  if (number % 2 === 0) {
    result = 'Even number';
  } else if (number % 2 === 1) {
    result = 'Odd number';
  }

  // Write your if-else statements here to determine even or odd

  console.log(`Number ${number} is ${result}`);
});
