import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let jsx = <p>AE86 App Here</p>;

    render(jsx, document.getElementById('app'));
  });
});
