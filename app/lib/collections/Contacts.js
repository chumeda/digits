contacts = "Contacts";  // avoid typos, this string occurs many times.

Contacts = new Mongo.Collection(contacts);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The Stuff document.
   */
  addContacts: function(doc) {
    console.log("addcontact");
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
  },

  deleteContacts: function(docID) {
    Contacts.remove(docID);
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
  first: {
    label: "First",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contacts,
      placeholder: "First Name"
    }
  },
  last: {
    label: "Last",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contacts,
      placeholder: "Last Name"
    }
  },
  address: {
    label: "Address",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contacts,
      placeholder: "Address"
    }
  },
  phone: {
    label: "Phone",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contacts,
      placeholder: "Phone Number"
    }
  },
  email: {
    label: "Email",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contacts,
      placeholder: "Email"
    }
  }
}));
