/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditContactsForm: {
    /**
     * After successful form submission, go to the ListStuff page.
     */
    onSuccess: function() {
      Router.go('ListContacts');
    }
  }
});