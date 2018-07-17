var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function dateSuffix(date) {
  if (date === 1) {
    return (String(1) + 'st');
  } else if (date === 2) {
    return (String(2) + 'nd');
  } else if (date === 3) {
    return (String(2) + 'rd');
  } else {
    return (String(date) + 'th');
  }
}
console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' + dateSuffix(today.getDate()));

// function dateSuffix(date) {
//   var suffix = 'th';
//   var dateString = String(date);
//   var digit;

//   if (dateString.length === 1 ) {
//     digit = dateString[0];
//   } else if (dateString[0] !== '1') {
//     digit = dateString[1];
//   }

//   if (digit === '1') {
//     suffix = 'st';
//   } else if (digit === '2') {
//     suffix = 'nd';
//   } else if (digit === '3') {
//     suffix = 'rd';
//   }

//   return String(date) + suffix;
// }

// console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));

