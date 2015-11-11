/**
 * A list of contacts to pre-fill the Collection.
 * @type {*[]}
 */
var contactsSeeds = [
  {first: "Philip", last: "Johnson", address: "1680 East-West Rd", phone: "808-956-3489", email: "johnson@hawaii.edu"},
  {first: "Henri", last: "Casanova", address: "1680 East-West Rd", phone: "808-956-5878", email: "henric@hawaii.edu"},
  {first: "Kim", last: "Binsted", address: "1680 East-West Rd", phone: "808-956-6107", email: "binsted@hawaii.edu"}
];

/**
 * Initialize the contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds,  function(contacts) {
    Contacts.insert(contacts);
  });
}
