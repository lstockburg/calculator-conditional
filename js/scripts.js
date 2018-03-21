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
  $("button").click(function(){
    $("form#calc").submit(event);
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var thisid = this.id
    var result;
    switch() {
      case thisid === "add":
        result = add(number1, number2);
        break;
      case thisid === "subtract":
        result = subtract(number1, number2);
        break;
      case thisid === "multiply":
        result = multiply(number1, number2);
        break;
      case thisid === "divide":
        result = divide(number1, number2);
        break;
    }
    $("#output").text(result);

  });
  // $("form#calc").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#num1").val());
  //   var number2 = parseInt($("#num2").val());
  //   var result = add(number1, number2);
  //
  //   $("#output").text(result);
  // });
});
