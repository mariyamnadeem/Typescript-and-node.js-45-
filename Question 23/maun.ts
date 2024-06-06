/* Question 23
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/


// equality and inequality  test 1
console.log("Equality test with string:", "Apple" === "Apple");

//equality and inequality test 2
console.log("Inequality test with string:", ("Apple" as string) != "orange");

//test using the lower casw function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");


// Numerical tests involving equality 
console.log("Equality test with numbers:", 26 === 26);

// Numerical tests involving inequality,
console.log("Inequality test with numbers:", (26 as number) != 35);



//greater than test
console.log("Greater than test:", 10 > 5);
//less than test
console.log("less than test:", 5 < 10);
//greater than or equal to
console.log("Greater than and equal to test:", 10 >= 10);

//less than or equal to
console.log("less than or equal to test", 5 <= 10);


//tests using "and" and "or" operator
console.log("And operator test:", 5===5 && 10 > 5);


//tests using "and" and "or" operator
console.log("Or operator test:", 5===5 || false);

//test wether an item is in a aaray
const fruits :string[] = ['Mango', 'Nashpati', 'Banana'];
console.log('Test "Nashpati" in the array:',fruits.includes("Nashpati"));

//test wether an item is in a array
console.log('Testing "Apple" is not in array:', !fruits.includes('Apple'));