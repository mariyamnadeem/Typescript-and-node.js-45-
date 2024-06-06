//Question 40
///Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array
var magician = ['Harry potter', 'Hermoine Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicians(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
show_magicians(magician);
