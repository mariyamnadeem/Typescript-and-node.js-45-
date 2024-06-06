/* Question 15
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

const guest: string[] = ["Ali","Fatima","Yashal","Kiswah"];
console.log(`Due to some reason ${guest[1]} will not come on my dinner\n`);
guest[1] = "Hudaim";
for(let i=0; i<guest.length;i++){
    //console.log(`Dear ${guest[i]}! I would like to invite you for dinner on sunday.`);

}

console.log(`\nGood News! we have arrange a big dinner table so we invite 3 more guest.\nThank you`);

guest.unshift("Arsalan");
guest.splice(2,0,"Hammad");
guest.push("Sohail");

for (let i=0;i<guest.length;i++){
    console.log(`Dear $ {guest[i]}, you are invited for dinner.\n`);
}