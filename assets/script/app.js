let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if(display.value.includes('%')){
      const originalValue = display.value.replace('%', '');
      display.value = eval(originalValue) / 100;
    } else {
    display.value = eval(display.value);
  } 
}catch (error) {
    display.value = 'Error';
  }
}