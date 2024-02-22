// Problem Statement 7(LeetCode)
// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

var reverse = function(x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  
  // Convert the integer to a string and reverse it
  let reversed = Math.abs(x).toString().split('').reverse().join('');
  
  // Handle the negative sign if present
  if (x < 0) {
      reversed = '-' + reversed;
  }
  
  // Convert the reversed string back to an integer
  const result = parseInt(reversed);
  
  // Check if the result is within the 32-bit signed integer range
  if (result > INT_MAX || result < INT_MIN) {
      return 0;
  }
  
  return result;
};