/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */

AutoForm.hooks({
  AddContactsForm: {
    /**
     * After successful form submission, go to the ListStuff page.
     */
    onSuccess: function() {
      Router.go('ListContacts');
    }
  }
});