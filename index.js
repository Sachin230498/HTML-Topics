function sumDigits(num) {
  if (num === 0) return 0; // Edge case: if num is 0, return 0
  return num % 9 || 9; // Calculate the digital root
}

// Test with the number 12345
let result = sumDigits(9999);
console.log("The single digit sum of 12345 is:", result);
