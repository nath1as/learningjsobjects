var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};
function objectHasProperty(object, propertyName) {
  var keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

