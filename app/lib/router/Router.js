/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */

/*globals Contacts*/

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Contacts"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListContacts'
});

Router.route('/add', {
  name: 'AddContacts'
});


Router.route('/contacts/:_id', {
  name: 'EditContacts',
  data: function() { return Contacts.findOne(this.params._id); }
});
