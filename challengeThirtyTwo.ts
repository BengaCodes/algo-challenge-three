// Compare two integers given as strings.

// Example

// For a = "12" and b = "13", the output should be compareIntegers(a, b) = "less";

// For a = "875" and b = "799", the output should be compareIntegers(a, b) = "greater";

// For a = "1000" and b = "1000", the output should be compareIntegers(a, b) = "equal".

function compareIntegers(a: string, b: string): any {
  if (parseInt(a) === parseInt(b)) {
    return 'equal'
  } else if (parseInt(a) < parseInt(b)) {
    return 'less'
  } else if (parseInt(a) > parseInt(b)) {
    return 'greater'
  }
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));