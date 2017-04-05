import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveReminder: function() {
      console.log('he;;pkljlkj');
      this.transitionToRoute('reminders');
    }
  }

});
