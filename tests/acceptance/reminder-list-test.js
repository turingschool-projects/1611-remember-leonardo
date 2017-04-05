/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  click('.reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/reminder/1');
    assert.equal(Ember.$('.reminder-item:first').text().trim(), Ember.$('.reminder-title').text().trim());
  });
});

test('before submit five', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders')

  andThen(function() {
    assert.equal(Ember.$('.reminder-item').length, 5);
  })

  click('.new-reminder-button')

  fillIn('.input-title', 'asdf')
  fillIn('.input-body', 'poop')

  click('.submit-button')

  andThen(function() {
    assert.equal(Ember.$('.reminder-item').length, 6)
  })
})

test('should display message to create reminder if no reminders', function(assert) {
  server.createList('reminder', 0);

  visit('/reminders')

  andThen(function() {
    assert.equal(Ember.$('.reminder-item').length, 0);
    assert.equal(Ember.$('.reminder-message').length, 1);
  })
})

  test('these yung reminders should be editable', function(assert) {
    server.createList('reminder', 5)

    visit('/reminders')

    andThen(function() {
      assert.equal(Ember.$('.reminder-item').length, 5);
    })

    click('.new-reminder-button')

    fillIn('.input-title', 'asdf')
    fillIn('.input-body', 'poop')

    click('.submit-button')

    andThen(function() {
      assert.equal(Ember.$('.reminder-item').length, 6);
    })

    click('.reminder-item:first');
    click('.edit-reminder-button');

    fillIn('.input-title', 'suh')
    fillIn('.input-body', 'bro')

    click('.submit-button')

    andThen(function() {
      assert.equal(currentURL(), '/reminders');
      assert.equal(Ember.$('.reminder-item:first').text().trim(), 'suh');
    });



  })


