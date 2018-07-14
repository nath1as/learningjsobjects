function wordCount(string) {
  var array = string.split(' ');
  var object = {};
  var i;
  for (i in array) {
    if (object[array[i]] === undefined) {
      object[array[i]] = 1;
    } else {
      object[array[i]]++;
    }
  }
  return object;
}

console.log(wordCount('box car cat bag box'));
