const result = document.querySelector("#result");

function display(val) {
  result.value += val;
}

function equate() {
  let x = result.value;
  let y = eval(x);
  result.value = y;
}

function clr() {
  result.value = "";
}
