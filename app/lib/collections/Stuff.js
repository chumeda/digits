contacts = "Contacts";  // avoid typos, this string occurs many times.

Contacts = new Mongo.Collection(contacts);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The Stuff document.
   */
  addContacts: function(doc) {
    check(doc, Contacts.simpleSchema());
    Contacts.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param doc The Stuff document.
   * @param docID It's ID.
   */
  editContacts: function(doc, docID) {
    check(doc, Contacts.simpleSchema());
    Contacts.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(contacts, function () {
    return Contacts.find();
  });
}


/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Contacts.attachSchema(new SimpleSchema({
  name: {
    label: "Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contacts,
      placeholder: "Bicycle"
    }
  },
  quantity: {
    label: "Quantity",
    type: Number,
    optional: false,
    autoform: {
      group: contacts,
      placeholder: "3"
    }
  }
}));
