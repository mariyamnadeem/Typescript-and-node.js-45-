/* Question 14
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
var Guest_List = ['Imran khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
var absent_Guest = 'Imran Khan';
var new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party"));
