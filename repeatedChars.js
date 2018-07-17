function repeatedCharacters(string) {
  var i;
  var count = {};
  string = string.toLowerCase();

  for (i = 0; i < string.length; i++) {
    if (count[string[i]] === undefined) {
      count[string[i]] = 1; 
    } else {
      count[string[i]]++;
    }
  }

  for (char in count) {
    if (count[char] === 1) {
      delete count[char];
    }
  }
  
  console.log(count);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

