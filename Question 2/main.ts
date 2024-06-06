/* Question 2
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let per = "HAMMAD";
console.log(per.toLowerCase());
let per1 = "typescript";
console.log(per.toUpperCase());
let per2 = "javascript";
console.log(per2.replace(/\b\w/g, a => a.toUpperCase()));