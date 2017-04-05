import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveReminder: function() {
      this.transitionToRoute('reminders');
    }
  }

});
