/* Question 11
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, but each message should be personalized with the person’s name
*/

let friendsArr1 = ["Maha","Ayesha","Hamna","Sara"];
let message: string = "is a good person";
for (let r=0; r<friendsArr1.length; r++){
    console.log(friendsArr1[r] + message);
}