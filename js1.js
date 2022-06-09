var down = true;
var start = 10;
var value = 1;
var end = 0;
var string = 'Decrease';

document.getElementById('btn').innerHTML = `${string} ${start}`;

function mf() {
  if (down == true && start >= end) {
    start -= value;
  } else {
      start += value;
  }
  if (start == end) {
    down = false
    string = 'Increase';
  }
  if (start == 10) {
    down = true
    string = 'Decrease';
  }
  document.getElementById('btn').innerHTML = `${string} ${start}`;
}

