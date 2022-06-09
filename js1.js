document.getElementById('btn').innerHTML = `Decrease ${value}`;
var up = true;
var value = 10;
var increment = 1;
var ceiling = 0;

function mf() {
  if (up == true && value >= ceiling) {
    value -= increment

    if (value == ceiling) {
      up = false;
    }
  } else {
      up = false
      value += increment;

      if (value == 10) {
        up = true;
      }
  }

  document.getElementById('btn').innerHTML = `Decrease ${value}`;
}


