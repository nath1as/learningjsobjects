var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

function average(obj) {
  var sum = 0;
  var values = Object.values(obj); // convert values to a regular old array

  for (var i = 0; i < values.length; i++) {
    sum += values[i];
  }

  return sum / values.length;
}

average(myArray);
