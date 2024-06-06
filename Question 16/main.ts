/* Question 16
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

const guest: string[] = ["Anum", "Mariyam", "Nida","Laiba"];
guest[3] = "Papa";
for (let i=0; i<guest.length; i++){}
    guest.unshift("Safia");
    guest.splice(2,0,"Arham");
    guest.push("Aiman");
    for(let i=0; i<guest.length; i++)
console.log("\nSorry we can't arrange big table,only two person will be invited\n");
while (guest.length>2){
    let removeGuest=guest.pop()
console.log(`\nSorry ${removeGuest}, you are not invitedfor dinner.\n`);
}
    for (let i=0; i<guest.length; i++){
        console.log(`Dear ${guest[i]}, you are still invited`);
    }
    guest.splice(0,2);
    console.log(guest);
