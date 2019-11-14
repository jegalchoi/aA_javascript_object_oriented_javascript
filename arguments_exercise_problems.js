/* 
function sum(num1) {
  let total = 0;
  
  for (let i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }
  
  return total;
}

console.log(sum(1,2,3,4));


function sum(num1, ...nums) {
  let total = num1;

  for (let i = 0; i < nums.length; i += 1) {
    total += nums[i];
  }

  return total;
}

console.log(sum(1, 2, 3, 4));

*/