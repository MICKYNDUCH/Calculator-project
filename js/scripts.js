var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  alert(add(number1, number2));
});

// $(document).ready(function() {
//  var number1 = parseInt(prompt("Enter a number:"));
//  var number2 = parseInt(prompt("Enter another number:"));
//  alert(add(number1, number2));
// });

// var add = function(number1 , number2) {
// return number1 / number2 ;
// }
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"));
// alert("The answer is" + add(number1 , number2));
//
// var add = function(number1 , number2) {
// return number1 + number2 ;
// }
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"));
// alert("The answer is" + add(number1 , number2));
//
// var add = function(number1 , number2) {
// return number1 - number2 ;
// }
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"));
// alert("The answer is" + add(number1 , number2));
