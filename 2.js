ar person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

//console.log(person.firstName + ' ' + person.lastName);
console.log(person.firstName() + ' ' + person.lastName());

