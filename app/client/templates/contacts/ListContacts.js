Template.ListContacts.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  contactsList: function () {
    return Contacts.find();
  }
});