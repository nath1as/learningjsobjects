var hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(source, destination) {
  var count = 0;
  var property;
  for (property in source) {
    destination[property] = source[property];
    console.log(property);
    count += 1;
  }

  return count;
}

var sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);   
