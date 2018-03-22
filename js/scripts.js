//business logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

//front-end logic

$(document).ready(function() {
  $("form#calc").submit(function(event){
  event.preventDefault();
  var number1 = parseInt($("#num1").val());
  var number2 = parseInt($("#num2").val());
  var operation =$("input:radio[name=op-type]:checked").val();
  var result;
  switch(operation) {
    case "add":
      result = add(number1, number2);
      console.log(result);
      break;
    case "subtract":
      result = subtract(number1, number2);
      break;
    case "multiply":
      result = multiply(number1, number2);
      break;
    case "divide":
      result = divide(number1, number2);
      break;
  }
  $("#output").text(result);
  });
});
