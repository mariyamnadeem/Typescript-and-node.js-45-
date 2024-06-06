//question 41
//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
var magician = ['Harry potter', 'Hermoine Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magician[i] = 'the Great' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
make_great(magician);
show_magicians(magician);
