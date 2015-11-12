Template.ListContacts.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  contactsList: function () {
    return Contacts.find();
  }
});

Template.ListContacts.events({

  "click .delete": function(){
    Meteor.call("deleteContacts",this._id);
  }

});