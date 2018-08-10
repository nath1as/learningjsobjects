// function penultimate(string) {
//   console.log(string.split(' ')[string.split(' ').length - 2]);
// }

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}
penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

