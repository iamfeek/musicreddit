// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
import '../methods.js';

Meteor.publish('links.all', function () {
  return Links.find();
});
