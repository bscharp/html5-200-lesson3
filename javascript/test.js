// this is a single line comment in javascript

/*
  block comment
*/

// Variables

// string type data*********************************


firstName = "new";

var username = "yourName";

var firstName = "Bob"
var lastname = "Scharping";

// bad variable names have special characters, spaces, begin with a number


// single and double quotes

// single quoted string prints all the enclosed characters

// escape character - \

//console.log(lastname); // shows value of lastname to console

var message = lastname + " " + firstName;

//console.log(message);

// target and replace element on the page

var string1 = document.getElementById("string1");
string1.innerHTML = message;
var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);
message = message.toUpperCase();
//console.log(message);

// Number (don't use quotes for numbers)*************************

var level = 1;
var ssNumber = 123456789; // this is an integer type
var cost = 1.50; // this is a float type
var cost1 = 50;
var cost2 = 50;
var total = cost1 + cost2; // perform addition
var total2 = cost1 * cost2;  // multiplication

//console.log(total);

/*** Array data type ******************************/
// create an array
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";
//imageList.push("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById("placeholder");

imagePlaceholder.setAttribute("src", imageList[6]); //update the src attribute of the image

console.log(imageList.length);

//  Boolean data type **************************
// true or false; yes or no; 1 or 0

var oldEnough = false;
var hasContent = true;

var age = 18;

// if-then statements (branching logic, app logic, business log) ***
// check the age.....

// too young
if (age <= 20) {
  oldEnough = false;
}
else {
  oldEnough = true;
}

if ( oldEnough == true ) {
  // == means "is equal to"; comparison
  // = means "set to"; assignment
  // more code here
  console.log("you may ride the roller coaster");
}
else {
  console.log("you may not ride the roller coaster");
}

// Functions, Methods, Objects **********************************
function dynamicGreeting( ){
  //create the built-in date object
  var now = new Date();
  var time = now.getHours(); //extract the hours
  
  if( time < 12 ) {
    alert("Good morning");
  }
  
  if ( time == 12 ) {
    alert("time to eat lunch"); 
  }
  
  if ( time > 12 ) {
    alert("good evening, the time is..." + now.toLocaleString()); 
  }
  
}

dynamicGreeting();
