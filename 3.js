var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = array1;

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);    // [ 'Moe', 'Larry', 'CURLY',  'CHEMP', 'Harpo',  'CHICO', 'Groucho','Zeppo' ];
console.log(array1);   // [ 'Moe', 'Larry', 'CURLY',  'CHEMP', 'Harpo',  'CHICO', 'Groucho','Zeppo' ];

