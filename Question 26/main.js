//Question 26
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.stion 26
var alienColors = "green";
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//Version 1 of the program
if (alienColors === "green") {
    console.log("players earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("players earned 10 points.");
}
else if (alienColors === "red") {
    console.log("players earned 15 points.");
}
else {
    console.log("please select right color");
}
//Version 2 of the program
alienColors = "yellow";
if (alienColors === "green") {
    console.log("players earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("players earned 10 points.");
}
else if (alienColors === "red") {
    console.log("players earned 15 points.");
}
else {
    console.log("please select right color");
}
//Version 3 of the program
alienColors = "red";
if (alienColors === "green") {
    console.log("players earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("players earned 10 points.");
}
else if (alienColors === "red") {
    console.log("players earned 15 points.");
}
else {
    console.log("please select right color");
}
