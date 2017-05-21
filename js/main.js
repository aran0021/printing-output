alert("JavaScript is conected!");

// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b 
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c
!a || !c
*/


var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n___________\n" +
      "a + b = " + (a + b) + "\n" +
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "a += b = " + (a += b) + "\n" +
      "a -= b = " + (a -= b) + "\n" +
      "a *= b = " + (a *= b) + "\n" +
      "a /= b = " + (a /= b) + "\n" +
      "a %= b = " + (a %= b) + "\n" +
      "a === b = " + (a === b) + "\n" +
      "a !== b = " + (a !== b) + "\n" +
      "a > b = " + (a > b) + "\n" +
      "a < b = " + (a < b) + "\n" +
      "!a && !c = " + (!a && !c) + "\n" +
      "!a || !c = " + (!a || !c) + "\n");


// Declare the variable first_name and assign it with the value of Jorge;
var first_name = "Jorge ";
// Declare the variable last_name and assign it with the value of Aranda;
var last_name = "Aranda";
// Declare the variable email and assign it with the value of aran0021@algonquinlive.com;
var email = "aran0021@algonquinlive.com";
// Declare variable output.
var output;

// Concatinate first_name, last_name, email and string literals needed 
// to form the sentence:


output = "My name is" + first_name + " " + last_name + "." + "You can contact me at" + email + ".";

// Print output using alert()
alert(output);
// Print output using console.log()
