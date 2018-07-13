var wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(object, property) {
  object[property]++;
}

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 } 


// function incrementProperty(object, propertyName) {
//   if (object[propertyName]) {
//     object[propertyName] += 1;
//   } else {
//     object[propertyName] = 1;
//   }

//   return object[propertyName];
// }
