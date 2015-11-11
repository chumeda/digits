/**
 * A list of contacts to pre-fill the Collection.
 * @type {*[]}
 */
var contactsSeeds = [
  {name: "Basket", quantity: 3},
  {name: "Bicycle", quantity: 2}
];

/**
 * Initialize the contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds,  function(contacts) {
    Contacts.insert(contacts);
  });
}
