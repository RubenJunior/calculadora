let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let expression = display.value;
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
  try {
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}